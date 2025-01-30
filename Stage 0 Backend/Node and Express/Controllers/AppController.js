// Class AppController


class AppController {
    static async getDetails(req, res) {
        try {
            const responseDetails = {
                email: "akaliasaviour@gmail.com",
                current_datetime: new Date(),
                github_url: "https://github.com/SAVAGEAKALIA/HNG12"
            };
            // const now = new Date();
            // const year = now.getFullYear()
            // const month = now.getMonth() + 1
            // const day = now.getDate()
            // const hour = now.getHours()
            // const minute = now.getMinutes()

            res.status(200, 'Ok').json(responseDetails)
        } catch (err) {
            console.error('The following error occurred: ', err)
            res.status(500).json({error: 'Unable to fetch Details: ', err})
        }
    }
}

export default AppController;