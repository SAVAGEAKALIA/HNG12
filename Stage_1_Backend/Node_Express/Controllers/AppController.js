// Class AppController
import axios from 'axios';
import {isPrime, isPerfect, isArmstrong, digitSum, oddEven} from '../utils/stage_1_utils.js';


class AppController {
    static async getDetails(req, res) {
        try {
            const responseDetails = {
                email: "akaliasaviour@gmail.com",
                current_datetime: new Date(),
                // github_url: "https://github.com/SAVAGEAKALIA/HNG12/tree/main/Stage_0_Backend/Node_Express"
                github_url: "https://github.com/SAVAGEAKALIA/HNG12"
            };

            res.status(200, 'Ok').json(responseDetails)
        } catch (err) {
            console.error('The following error occurred: ', err)
            res.status(500).json({error: 'Unable to fetch Details: ', err})
        }
    }

    static async getNumber(req, res) {
        let number = req.query.number;
        number = parseInt(number);

        if (isNaN(number)) {
            console.error('Invalid number input');
            return res.status(404).json({
                number: "alphabet",
                error: 'true'
            });
        }

        const url = `http://numbersapi.com/${number}/math?json`;

        try {
            const data = await axios.get(url);
            // console.error(data);
            let properties = [];

            const primeNumber = await isPrime(number);
            const perfectNumber = await isPerfect(number);
            let armstrongNumber = await isArmstrong(number);
            if (armstrongNumber) {
                armstrongNumber = 'armstrong';
                properties.push(armstrongNumber);
            } else {
                armstrongNumber = 'not armstrong';
            }
            const sumDigit = await digitSum(number);
            const evenOdd = await oddEven(number);
            properties.push(evenOdd);

            let response = {
                number: data.data.number,
                is_prime: primeNumber,
                is_perfect: perfectNumber,
                properties: properties,
                digit_sum: sumDigit,
                fun_fact: data.data.text
            };

            res.status(200).json(response);
        } catch (err) {
            // console.error('The following error occurred: ', err);
            // res.status(500).json({error: 'Unable to fetch number fact', details: err.message});
            return res.status(404).json({
                number: "alphabet",
                error: 'true'
            });
        }
    }

}

export default AppController;