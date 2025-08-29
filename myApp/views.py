from django.shortcuts import render, HttpResponse
from . models import Message
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.
def homepage(request):

    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']

        new_message = Message(name=name, email=email, message=message)
        new_message.save()

        send_mail(
            'New User',
            f'''
            Name: {name}
            Email: {email}
            Message: {message}''',
            settings.EMAIL_HOST_USER,
            ['shoaibmtoronto@gmail.com'],
            fail_silently=False

        )

    return render(request, "base.html")