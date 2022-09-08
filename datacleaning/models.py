from django.db import models


class DataFile(models.Model):
    name = models.CharField(max_length=256)
    files = models.FileField(upload_to="data")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Data File'
