# Get Details API

The Get Details API is a backend service that returns specific details.
This task is issued by HNG and is required to pass Stage 0 of the HNG INTERNSHIP.
The tech stack includes Node.js and Express.js.

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/SAVAGEAKALIA/HNG12
   ```

2. Navigate to the project directory and install dependencies:
   ```bash
   cd 'Stage_1_Backend/Node_Express' && npm install
   ```

3. Start the server:
   ```bash
   npm run start-server
   ```

4. Get details by running:
   ```bash
   curl localhost:3000/details ; echo ''
   ```

   For Linux, you can use:
   ```bash
   curl 0.0.0.0:3000/details ; echo ''
   ```

## API Documentation

### Get Details Endpoint

- **Request Type:** GET `/details`
- **Response Type:** `application/json`

### Classify Number Endpoint

- **Request Type:** GET `/api/classify-number`
- **Query Parameter:** `number` (required) - The number you want to classify.

#### Example Request:

```bash
curl 'localhost:3000/api/classify-number?number=28'
```

#### Example Response:

```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": [
    "even"
  ],
  "digit_sum": 10,
  "fun_fact": "28 is a perfect number."
}
```

### Response Structure

- `number`: The input number.
- `is_prime`: Indicates if the number is prime.
- `is_perfect`: Indicates if the number is a perfect number.
- `properties`: Array containing properties like "armstrong", "even", or "odd".
- `digit_sum`: Sum of the digits of the number.
- `fun_fact`: A fun fact about the number.

### Error Handling

- If an invalid number (like an alphabet) is provided:

```json
{
  "number": "alphabet",
  "error": "true"
}
```

## Backlinks

- [Python Developers](https://hng.tech/hire/python-developers)
- [C# Developers](https://hng.tech/hire/csharp-developers)
- [Golang Developers](https://hng.tech/hire/golang-developers)
- [PHP Developers](https://hng.tech/hire/php-developers)
- [Java Developers](https://hng.tech/hire/java-developers)
- [Node.js Developers](https://hng.tech/hire/nodejs-developers)

## Authors

- **Name:** Saviour Davies Akalia
- **Email:** [akaliasaviour@gmail.com]

