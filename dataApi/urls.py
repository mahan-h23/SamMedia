from django.urls import path, include
from .views import AffiliatePerUser, AffiliatePerServices, affiliateServiceCsv, AffiliatePieChart, OsPieChart, \
    PhonePieChart, ServicePieChart, LossUserslessMonth, AffiliateLossUserslessMonth, SatusOverview, AffiliatePayment, \
    PhonePayment, OsPayment, AffiliateSharePayment, OsSharePayment, TransOverCsv, FailedTrans

urlpatterns = [
    path('affiliateuser/', AffiliatePerUser.as_view(), name='affiliate_user'),
    path('affiliateservice/', affiliateServiceCsv, name='affiliate_service'),
    path('affiliatepie/', AffiliatePieChart.as_view(), name='affiliate_pie'),
    path('ospie/', OsPieChart.as_view(), name='os_pie'),
    path('phonepie/', PhonePieChart.as_view(), name='phone_pie'),
    path('servicepie/', ServicePieChart.as_view(), name='service_pie'),
    path('lossmonth/', LossUserslessMonth.as_view(), name='loss_month'),
    path('lossmonthaff/', AffiliateLossUserslessMonth.as_view(), name='loss_month_aff'),
    path('statusover/', SatusOverview.as_view(), name='status_over'),
    path('statusaff/', AffiliatePayment.as_view(), name='status_aff'),
    path('statusphone/', PhonePayment.as_view(), name='status_phone'),
    path('statusos/', OsPayment.as_view(), name='status_os'),
    path('affshare/', AffiliateSharePayment.as_view(), name='share_aff'),
    path('osshare/', OsSharePayment.as_view(), name='share_os'),
    path('transcsv/', TransOverCsv, name='trans_over'),
    path('transfailed/', FailedTrans.as_view(), name='trans_failed'),

]
