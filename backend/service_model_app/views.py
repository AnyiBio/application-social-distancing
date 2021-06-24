from django.shortcuts import render
from django.http import JsonResponse

from .models.distance_model import distanceModel
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def request_img(request):

    image = request.FILES['image'].read()
    coords, color = distanceModel(image)

    return JsonResponse({'coordenadas':coords, 'indices':color})