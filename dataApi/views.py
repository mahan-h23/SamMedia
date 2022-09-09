from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
import pandas as pd
from datacleaning.models import DataFile


class AffiliatePerUser(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        active = [925, 45, 6903, 18]
        deactive = [797, 50, 6053, 34]
        total = [1722, 95, 12956, 52]

        data = {
            "active": active,
            "deactive": deactive,
            "total": total,

        }

        return Response(data)


class AffiliatePerServices(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        l = DataFile.objects.get(name='affser')

        return Response(l.files)


def affiliateServiceCsv(request):
    l = DataFile.objects.get(name='affser')

    return HttpResponse(l.files)


class AffiliatePieChart(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        all_user = [52, 1722, 95, 12956]

        data = {
            "all_user": all_user,

        }

        return Response(data)


class OsPieChart(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        os = ['Android', 'HarmonyOS', 'OS X', 'Others', 'Windows Phone', 'iOS', 'iPadOS']
        users = [10484, 32, 3, 206, 3, 4093, 4]

        data = {
            "os": os,
            "users": users,

        }

        return Response(data)


class PhonePieChart(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        phone = ["A", "B", "C"]
        users = [4507, 5012, 5306]

        data = {
            "phone": phone,
            "users": users,

        }

        return Response(data)


class ServicePieChart(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        service = ['cl', 'gc', 'ma', 'ps', 'tv']
        users = [2927, 1464, 3120, 5592, 1722]

        data = {
            "service": service,
            "users": users,

        }

        return Response(data)


class LossUserslessMonth(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        days = ['< 5D', '5D < 10D', '10D < 15D', '15D < 30D']
        users = [4783, 363, 1027, 469]

        data = {
            "days": days,
            "users": users,

        }

        return Response(data)


class AffiliateLossUserslessMonth(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        affiliates = ['Others', 'aff_2', 'aff_3', 'aff_4']
        users = [34, 765, 50, 5793]

        data = {
            "affiliates": affiliates,
            "users": users,

        }

        return Response(data)


class SatusOverview(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        status = ['Delivered', 'Failed', 'Others', 'Pending']
        users = [17601, 45273, 1, 2]

        data = {
            "status": status,
            "users": users,

        }

        return Response(data)


class AffiliatePayment(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        delivered = [69, 2063, 60, 15409]
        failed = [96, 4943, 222, 40012]
        pend = [0, 0, 0, 2]
        others = [0, 0, 0, 1]

        data = {
            "delivered": delivered,
            "failed": failed,
            "pend": pend,
            "others": others,

        }

        return Response(data)


class PhonePayment(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        delivered = [5730, 6531, 5340]
        failed = [12296, 14594, 18383]
        pend = [2, 0, 0]
        others = [0, 1, 0]

        data = {
            "delivered": delivered,
            "failed": failed,
            "pend": pend,
            "others": others,

        }

        return Response(data)


class OsPayment(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        delivered = [11916, 51, 1, 196, 0, 5434, 3]
        failed = [34898, 37, 2, 665, 23, 9647, 1]
        pend = [0, 0, 0, 0, 0, 2, 0]
        others = [0, 0, 0, 0, 0, 1, 0]

        data = {
            "delivered": delivered,
            "failed": failed,
            "pend": pend,
            "others": others,

        }

        return Response(data)


class AffiliateSharePayment(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        affiliates = ['Others', 'aff_2', 'aff_3', 'aff_4']
        users = [165, 7006, 282, 55424]

        data = {
            "affiliates": affiliates,
            "users": users,

        }

        return Response(data)



class OsSharePayment(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        os = ['Android', 'HarmonyOS', 'OS X', 'Others', 'Windows Phone', 'iOS', 'iPadOS']
        users = [46814, 88, 3, 861, 23, 15084, 4]

        data = {
            "os": os,
            "users": users,

        }

        return Response(data)

def TransOverCsv(request):
    l = DataFile.objects.get(name='trans')

    return HttpResponse(l.files)


class FailedTrans(APIView):
    # authentication_classes = []
    # permission_classes = []

    def get(self, request, format=None):
        hours = ["< 1H","1H < 5H", "5H < 24H"]
        users = [5064, 783, 437]

        data = {
            "hours": hours,
            "users": users,

        }

        return Response(data)