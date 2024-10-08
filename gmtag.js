// ==User Script==
// @name         Chess.com GM Tag
// @namespace    http://chess.com/gm-tag-script
// @version      0.1
// @description  Show GM tag on your account in Chess.com
// @author       You
// @match        https://www.chess.com/*
// @grant        none
// @icon         https://www.chess.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/Kalimitas/GMTag/main/gmtag.user.js
// @downloadURL  https://raw.githubusercontent.com/Kalimitas/GMTag/main/gmtag.user.js
// ==/User Script==

(function() {
    'use strict';
    setTimeout(function() {
        var username = document.querySelector('.username[data-username="Dark_Observer_X"]');
        if (username) {
            var profilePicture = username.closest('.player-profile-picture');
            if (profilePicture) {
                var gmTag = document.createElement('span');
                gmTag.textContent = 'GM';
                gmTag.style.color = 'gold';
                gmTag.style.fontWeight = 'bold';
                gmTag.style.fontSize = '12px';
                gmTag.style.position = 'absolute';
                gmTag.style.top = '0';
                gmTag.style.right = '0';
                gmTag.style.padding = '2px';
                gmTag.style.borderRadius = '50%';
                gmTag.style.background = 'black';
                gmTag.style.zIndex = '1';
                gmTag.style.pointerEvents = 'none'; // Prevents the GM tag from interfering with clicks on the profile picture
                profilePicture.appendChild(gmTag);
            } else {
                console.log('Profile picture element not found');
            }
        } else {
            console.log('Username element not found');
        }
        // Add a mutation observer to re-run the script if the page changes
        var observer = new MutationObserver(function(mutations) {
            var username = document.querySelector('.username[data-username="Dark_Observer_X"]');
            if (username) {
                var profilePicture = username.closest('.player-profile-picture');
                if (profilePicture) {
                    var gmTag = profilePicture.querySelector('span');
                    if (!gmTag) {
                        var newGmTag = document.createElement('span');
                        newGmTag.textContent = 'GM';
                        newGmTag.style.color = 'gold';
                        newGmTag.style.fontWeight = 'bold';
                        newGmTag.style.fontSize = '12px';
                        newGmTag.style.position = 'absolute';
                        newGmTag.style.top = '0';
                        newGmTag.style.right = '0';
                        newGmTag.style.padding = '2px';
                        newGmTag.style.borderRadius = '50%';
                        newGmTag.style.background = 'black';
                        newGmTag.style.zIndex = '1';
                        newGmTag.style.pointerEvents = 'none';
                        profilePicture.appendChild(newGmTag);
                    }
                }
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }, 1000);
})();
