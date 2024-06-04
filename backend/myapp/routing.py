from django.urls import path
from myapp import consumers

websocket_urlpatterns = [
    path('ws/somepath/', consumers.MyConsumer.as_asgi()),
]