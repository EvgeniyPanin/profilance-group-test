# [Тестовое на хостинге](https://evgeniypanin.github.io/profilance-group-test/)

Пользователи для проверки работоспособности:
Администратор:

```
login: admin
password: admin_password
```
Пользователь с обычными правами:

```
login: user
password: user_password
```

Для того, чтобы клонировать проект себе на компьютер, выполните в командной строке

```
git clone https://github.com/EvgeniyPanin/profilance-group-test.git
```
Сборка проекта работает на платформе NPM, поэтому для работы вам необходимо установить NodeJS

---
После скачивания проекта установите все необходимые пакеты командой
```
npm -i
```
Чтобы собрать версию проекта для разработки, выполните команду
```
npm run start
```
При этом запустится локальный сервер и страница с проектом автоматически откроется в браузере,
если автоматического запуска в браузере не произошло, вы можете самостоятельно открыть его по адресу

```
http://localhost:3000/
```
Для того чтобы получить локально готовую production версию проекта, необходимо выполнить команду

```
npm run build
```
После выполнения команды в корневой директории будет создана папка build, в которую будет помещен собранный проект.
