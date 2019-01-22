docker build -t customer-app:latest .

docker run -d -p 8306:80 customer-app:latest

Start-Process -FilePath "http://localhost:8306/"