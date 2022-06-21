using Microsoft.AspNetCore.SpaServices;
using VueCliMiddleware;

string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
  options.AddPolicy(name: MyAllowSpecificOrigins,
          builder =>
          {
            // To add custom origin sources replace AllowAnyOrigin with:

            // WithOrigin("{{YOUR_CUSTOM_URL}}")

            // You can also have multiple origins within this section, seperate with a comma
            builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
          }
      );
});

builder.Services.AddControllersWithViews();

builder.Services.AddRazorPages();

builder.Services.AddSpaStaticFiles(configuration =>
{
  configuration.RootPath = "ClientApp/dist";
});

var app = builder.Build();

app.UseCors(MyAllowSpecificOrigins);

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    //app.UseHttpsRedirection();
}
else
{
  app.UseDeveloperExceptionPage();
}

app.UseStaticFiles();
app.UseSpaStaticFiles();
app.UseRouting();

app.MapControllerRoute(
        name: "default",
        pattern: "{controller}/{action=Index}/{id?}");

if (app.Environment.IsDevelopment())
{
  app.MapToVueCliProxy(
      "{*path}",
      new SpaOptions { SourcePath = "ClientApp" },
      npmScript: "dev",
      regex: "Compiled successfully!");
}

app.MapRazorPages();

app.UseSpa(spa =>
{
  spa.Options.SourcePath = "ClientApp";
});

app.MapFallbackToFile("index.html"); ;

app.Run();
