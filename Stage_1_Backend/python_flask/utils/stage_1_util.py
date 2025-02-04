#!/usr/bin/python3
""" Utility function for HNG Stage one """


async def is_prime(num):
    """ Function to check if a number is prime """
    if num < 2:
        return False
    if num <= 3:
        return True
    if num % 2 == 0 or num % 3 == 0:
        return False
    i = 5
    while i * i <= num:
        if num % i == 0 or num % (i + 2) == 0:
            return False
        i += 6
    return True


async def is_perfect(num):
    """ Function to check if a number is perfect """
    if num < 1:
        return False
    sum_num = 0
    for i in range(1, num):
        if num % i == 0:
            sum_num += i
    return sum_num == num


async def is_armstrong(num):
    """ Function to check if a number is armstrong """
    if num < 1:
        return False
    sum_num = 0
    temp = num
    num_digits = len(str(num))
    while temp > 0:
        digit = temp % 10
        sum_num += digit ** num_digits
        temp //= 10
    return num == sum_num


async def is_digit_sum(num):
    """ Function to calculate the sum of digits in a number """
    if num < 1:
        return False
    sum_num = 0
    while num > 0:
        digit = num % 10
        sum_num += digit
        num //= 10
    return sum_num


async def odd_even(num):
    """ Function to check if a number is odd or even """
    return 'even' if num % 2 == 0 else 'odd'
