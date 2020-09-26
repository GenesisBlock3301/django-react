# Rest-react

## Project setup:
```
pip install django
pip install djangorestframework
django-admin startproject leadmanager
python manage.py app_name

```

## Extra setting.py setup

```
INSTALLED_APPS = [
   
    'rest_framework',
    .....
    'corsheaders'
    ....
]
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ................................
]

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ]
}
CORS_ORIGIN_ALLOW_ALL = True

```
