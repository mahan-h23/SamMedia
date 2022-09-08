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
        active = [925, 45, 6903,18]
        deactive = [797, 50, 6053,34]
        total = [1722, 95, 12956,52]

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