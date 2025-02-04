#!/usr/bin/env python
""" HNG Blueprint routes"""
import asyncio

from flask import jsonify

from . import hng_stage_0_route
from Controllers import MyController

my_controller = MyController()


@hng_stage_0_route.route('/', methods=['GET'], strict_slashes=False)
async def details():
    """ Route to return user details """
    valid, response = await my_controller.get_details()
    if valid:
        return jsonify(response), 200
    return response, 404
