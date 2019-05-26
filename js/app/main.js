define(["jquery", 'font-awesome'], function ($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function () {
        let statusWrapper = $('.status-wrapper');
        let infoWrapper = $('.info-wrapper');
        let motd = $('.motd');
        let favicon = $('.favicon');
        let players = infoWrapper.find('.players');

        infoWrapper.hide();
        require(['https://mcapi.us/scripts/minecraft.js'], function () {
            MinecraftAPI.getServerStatus('minecraft.keaton.dev',
                {port: '25565'}, function (err, server) {
                    if (err) {

                        console.log('Error loading status');
                        return;
                    }

                    console.log('Loaded status');

                    statusWrapper.find('[data-fa-i2svg]')
                        .toggleClass('fa-spinner')
                        .toggleClass(`fa-${server.online ? 'check' : 'times'}`);

                    statusWrapper.find('.server-status-text').text(server.online ? 'Online' : 'Offline')

                    if (server.online) {
                        motd.text('Message of the Day: ' + server.motd);
                        favicon.attr('src', server.favicon);
                        players.text(`Players: ${server.players.now}/${server.players.max}`);

                        infoWrapper.fadeIn("slow");
                    }
                });
        });
    });
});