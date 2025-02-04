#!/usr/bin/python3
""" Controller Class for Routes """
import asyncio
import aiohttp
from datetime import datetime
from utils import is_prime, is_perfect, is_armstrong, odd_even, is_digit_sum
from typing import Tuple, Dict, Any

from flask import request


class MyController:
    """ Controller class for Hng flask routes """

    async def get_details(self) -> Tuple[bool, Dict[str, Any]]:
        """ Async function to return user details to routes """
        response = {
            "email": "akaliasaviour@gmail.com",
            "current_datetime": datetime.now().isoformat(),
            "github_url": "https://github.com/SAVAGEAKALIA/HNG12"
        }

        if response:
            valid = True
        else:
            valid = False

        return valid, response

    async def getFacts(self) -> Tuple[bool, Dict[str, Any]]:
        """ Async function to return fun facts to routes """
        number = request.args.get('number')

        try:
            number = int(number)
        except (TypeError, ValueError):
            valid = False
            response = {
                "number": "alphabet",
                "error": True
            }

            return valid, response

        properties = []
        digit_sum_num = await is_digit_sum(number)
        prime_number = await is_prime(number)
        perfect_number = await is_perfect(number)
        odd_or_even_number = await odd_even(number)
        armstrong_number = await is_armstrong(number)
        armstrong_str = 'armstrong' if armstrong_number else ''
        if armstrong_str:
            properties.append(armstrong_str)
        properties.append(odd_or_even_number)

        if number:
            url = f'http://numbersapi.com/{number}/math?json'
            async with aiohttp.ClientSession() as session:
                async with session.get(url) as data:
                    fact = await data.json()
                    print(data)
                    valid = True
                    response = {
                        "number": fact['number'],
                        "is_prime": prime_number,
                        "is_perfect": perfect_number,
                        "properties": properties,
                        "digit_sum": digit_sum_num,
                        "fun_fact": fact['text']
                    }
                    return valid, response

        valid = False
        response = {
            "number": "alphabet",
            "error": True
        }

        return valid, response
