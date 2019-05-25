import config from './config.mjs'
export default {
    getBy(payload){
        $.ajax({
            url: `${config.BASE_URL}${config.AUTOMATONS_URL}/getBy`,
            type: 'GET',
            data: payload,
            success: function(data) {
                console.log(`Automatons got by unit_id = ${payload.search}, returned : ${data}`);
            },
            error: function(err){
                console.log(err)
            }
        });
    },
}