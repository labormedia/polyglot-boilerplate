FROM python:3.8.3-alpine3.12
COPY ./requirements.txt /app/
WORKDIR /app
RUN pip install -r requirements.txt
COPY ./helloworld.py .
COPY ./client-api.py .
EXPOSE 7000
# CMD env FLASK_APP=helloworld.py flask run -h 0.0.0.0 -p 6000
CMD python3 client-api.py