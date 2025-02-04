#!/usr/bin/python3
""" Blueprint for HNG projects """
from flask import Blueprint

hng_stage_0_route = Blueprint('hng_stage_0_route', __name__)
hng_stage_1_route = Blueprint('hng_stage_1_route', __name__)

from . import hng_stage_0
from . import hng_stage_1
