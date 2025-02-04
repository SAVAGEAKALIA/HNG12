#!/usr/bin/env python3
""" HNG Blueprint route for stage 1"""
from flask import jsonify

from . import hng_stage_1_route
from Controllers import MyController

my_controller = MyController()


@hng_stage_1_route.route('/api/classify-number', methods=['GET'], strict_slashes=False)
async def fun_facts():
    valid, response = await my_controller.getFacts()

    if valid:
        # print(response)
        return jsonify(response), 200
    return jsonify(response), 404
