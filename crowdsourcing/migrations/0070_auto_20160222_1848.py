# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-02-22 18:48
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('crowdsourcing', '0069_conversationrecipient_deleted'),
    ]

    operations = [
        migrations.AddField(
            model_name='conversationrecipient',
            name='status',
            field=models.SmallIntegerField(choices=[(1, b'Open'), (2, b'Minimized'), (3, b'Closed')], default=3),
        ),
        migrations.AlterField(
            model_name='conversationrecipient',
            name='conversation',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='conversations', to='crowdsourcing.Conversation'),
        ),
    ]
