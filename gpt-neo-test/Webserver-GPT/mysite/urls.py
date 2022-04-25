from django.urls import path
from django.views.generic import RedirectView

from mysite.core import views


urlpatterns = [
    path('', RedirectView.as_view(url='/form/1/'), name='index'),
    path('form/1/', views.AddressFormView.as_view(template_name='form.html'), name='form_1'),
    path('success/', views.SuccessView.as_view(), name='success'),
]
