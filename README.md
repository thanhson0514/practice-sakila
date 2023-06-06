# Thực hành truy vấn với database SAKILA

## Requirement

Yêu cầu cần có:

1. NodeJS
2. Typescript
3. MySQL ([Sakila database](https://dev.mysql.com/doc/sakila/en/sakila-structure.html))

## Usage

1. chạy dòng lệnh để cài đặt các modules của dự án
```bash
npm install
```

2. Tạo file `.env` và copy các biến môi trường từ file `.development.env` sang file `.env`

```dotenv
PORT=3001
HOST_DB=localhost
USER_DB=root
PASSWORD_DB=
NAME_DB=sakila
```

3. Chạy server và truy cập `http://localhost:{PORT}` (`PORT` được cài dặt ở biến PORT file `.env` - mặc định là cổng 3000)

```bash
npm run dev
```
