FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 7053

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["./aspnet-core-vite-base-template.csproj", "app/"]
RUN dotnet restore "app/aspnet-core-vite-base-template.csproj"
COPY . .
RUN apt-get update -yq 
RUN apt-get install curl gnupg -yq 
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN dotnet build "/src/aspnet-core-vite-base-template.csproj" -c Release -o /app/build
RUN apt-get update && apt-get install yarn
RUN dotnet build "/src/aspnet-core-vite-base-template.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "/src/aspnet-core-vite-base-template.csproj" -c Release -o /app/publish

FROM base AS runtime
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:5000
ENV ASPNETCORE_HTTP_PORT=5000
ENV ASPNETCORE_ENVIRONMENT Production
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "aspnet-core-vite-base-template.dll"]