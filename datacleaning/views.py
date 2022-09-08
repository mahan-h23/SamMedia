from django.shortcuts import render

def testView(request):
    return render(request,'home/index2.html')