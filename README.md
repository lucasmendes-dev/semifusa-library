# 📚 Biblioteca Semifusa
This project is a custom library management system developed for Semifusa, a cultural house that promotes access to music, dance, art and literature among others. The system helps manage a local library, allowing users to be registered and borrow books while administrators can track loans, returns, and inventory.

# 🚀 Tech Stack
- Backend: Laravel 12

- Frontend: React + Inertia.js

- Styling: Tailwind CSS + Shadcn UI

- Database: MySQL

- Infrastructure: Docker (for local development)

# ✅ Features
- Book and author management (CRUD)

- Loan and return system

- Reader registration

- Overdue loan tracking

- Graphic reports by genre, neighborhood, and age group

- Responsive and user-friendly interface

- Authentication and role-based access

# 🎯 Purpose
This project was designed to support the organization and accessibility of a community library with limited resources. It replaces manual processes with a digital system tailored to the reality of a small cultural space. It also served as an opportunity to deepen my experience in full-stack development and building useful tools for real-world impact.


#
Below is a step-by-step guide to run the project on your machine (Docker required).

### Step by Step
Clone Repository
```sh
git clone https://github.com/lucasmendes-dev/semifusa-library.git
```

```sh
cd semifusa-library/
```

Create the .env File
```sh
cp .env.example .env
```


Check if your .env file has at least those information
```dosini
APP_NAME="Laravel"
APP_DEBUG=true
APP_KEY=
APP_URL=http://localhost:8585

APP_LOCALE=pt_BR
APP_FALLBACK_LOCALE=pt_BR
APP_FAKER_LOCALE=pt_BR

DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=root

CACHE_DRIVER=redis
QUEUE_CONNECTION=redis
SESSION_DRIVER=redis

REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379

FILESYSTEM_DISK=public

```

Install the JS dependencies, and build the application
```sh
npm install --legacy-peer-deps
npm run build
```

Start the project containers
```sh
docker compose up -d
```

Access the container app
```sh
docker compose exec app bash
```

Inside the container, install the dependencies
```sh
composer install
```

Generate the Laravel project key
```sh
php artisan key:generate
```

Run migrations
```sh
php artisan migrate --seed
```

Access the project at:
[http://localhost:8585](http://localhost:8585)

Login & Password to the example environment
```sh
Login: test@example.com
Password: TestPassword1@
```
