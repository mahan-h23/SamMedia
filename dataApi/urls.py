from django.urls import path, include
from .views import AffiliatePerUser, AffiliatePerServices, affiliateServiceCsv

urlpatterns = [
    path('affiliateuser/', AffiliatePerUser.as_view(), name='affiliate_user'),
    path('affiliateservice/', affiliateServiceCsv, name='affiliate_service'),

]
