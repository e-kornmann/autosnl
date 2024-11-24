# Getting Started with the app

## Docker Dependencies

- Create .env.production and .env.development in both backend and frontend folder
- Install docker and docker-compose
- Install make

## Docker Commands

- `docker ps -a`: To list all containers
- `docker volume ls`: To list all Docker volumes
- `docker network ls`: To list all Docker networks
- `docker logs <container_name_or_id>`: To view logs of a specific container
- `docker exec -it <container_name_or_id> <cmd>`:
  - `env`: To access the shell of a running container, use
  - `http://<CONTAINER>:<PORT>/api/cars`

## Makefile Commands

- `make ps`: List running containers.
- `make down`: Stop and remove all containers.
- `make prune`: Stop, clean up, and remove unused containers and images.
- `make check-config`: Check all configs(env variables etc) are set before running containers
- `make up ENVIRONMENT=<env>`: Start all services.
- `make logs SERVICE=<service>`: Show logs for a specific service.
- `make restart SERVICE=<service>`: Restart a specific service.
- `make build-all ENVIRONMENT=<env>`: Build and start all services.
- `make build SERVICE=<service> ENVIRONMENT=<env>`: Build and start a specific service.

### GIT

main
│
├── dev
│   ├── feature/
│   │   ├── feature/add-user-authentication
│   │   ├── feature/user-profile
│   │   └── feature/payment-integration
│   │
│   ├── bugfix/
│   │   ├── bugfix/login-issue
│   │   └── bugfix/payment-error
│   │
│   └── release/
│       └── release/v1.0.0 dev
│
└── hotfix/
    └── hotfix/reset-password-fix

1. master: The root branch.
    - hotfix/: A separate branch for urgent fixes that need immediate attention in production, created directly from master.
2. dev: The integration branch for ongoing development, where features and bug fixes are merged.
    - feature/: Contains all feature branches. Each feature branch should be named descriptively to indicate its purpose.
    - bugfix/: Contains branches for bug fixes.
    - release/: Contains release branches for preparing new versions for deployment.