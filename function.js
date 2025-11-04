function criarBarra(var_nome, var_avatar, var_urlWhatsapp, var_urlBack, var_mensagem, var_ativarIcon) {
  var varStatus = document.createElement("span");
  varStatus.className = "status";
  var elementoPai = document.querySelector('#__next');
  
  var userBar = document.createElement("div");
  userBar.className = "user-bar";

  var backButton = document.createElement("div");
  backButton.className = "back";
  backButton.innerHTML = '<a href="'+var_urlBack+'"><svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg></a>';

  var avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.innerHTML = '<img src="'+var_avatar+'" alt="'+var_nome+'">';

  var name = document.createElement("div");
  name.className = "name";
  name.innerHTML = '<span>'+var_nome+'</span>&nbsp<span class="verificado" style="float: right" data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="currentColor" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span>';
  
  name.appendChild(varStatus)

  var moreActions = document.createElement("div");
  moreActions.className = "actions more";
  moreActions.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>';

  var attachmentAction = document.createElement("div");
  attachmentAction.className = "actions cam-action";
  attachmentAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-video"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" fill="currentColor"/><path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`;

  var phoneAction = document.createElement("div");
  phoneAction.className = "actions phone-action";
  phoneAction.innerHTML = '<a href="'+var_urlWhatsapp+'"><svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg></a>';

  userBar.appendChild(backButton);
  userBar.appendChild(avatar);
  userBar.appendChild(name);
  userBar.appendChild(moreActions);

  if (var_ativarIcon === "off") {
    attachmentAction.innerHTML = "";
    phoneAction.innerHTML = "";
  }else{
    userBar.appendChild(phoneAction);
    userBar.appendChild(attachmentAction);
  }

  if (elementoPai) {
    elementoPai.prepend(userBar);
  }

const botBody = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
const userAvatar = botBody.querySelector('img[elementtiming="Bot avatar"]');
const status = varStatus;

const audioNot = document.createElement('audio');
audioNot.src = 'https://typebotemplates.site/br/dist/audio/audio_whatsapp.mp3';
let mensagesLength = 0;
let respostaLength = 0;

createInfoMessage();  
  
function createInfoMessage() {
const botBody = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container');
const div = document.createElement('div');
const infoHTML = '<div style="display: flex; align-items: center; gap: 6px; background-color: #d5f4f0; border-radius: 10px; padding: 10px; width: fit-content; max-width: 450px; margin: 4.5rem auto .5rem;" class="info-container"><div><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#4b5e63" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"></path></svg></div><p style="color: #53676b; font-size: 13px;">'+var_mensagem+'</p></div><div class="hoje">Hoje</div>';

div.innerHTML = infoHTML;    
const messagesContainer = botBody.querySelector('.typebot-chat-view');    
messagesContainer.insertBefore(div, messagesContainer.firstChild);
}
setInterval(() => {
  const isTyping = botBody.querySelector('.bubble1');
  const sibling = isTyping?.parentElement?.parentElement?.nextSibling;

  if(isTyping && sibling.src) {
    status.innerText = 'gravando audio...'
  } else if(isTyping) {      
    status.innerText = 'digitando...'
  } else {
    status.innerText = 'online'
  }

const allMessages = botBody.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');    
      
      if(allMessages.length > mensagesLength) {        
        if(!isTyping) {
          for (let i = mensagesLength; i < allMessages.length; i++) {
            const iconContainer = document.createElement('div');
            now = new Date
            const checkIcon = `<span class="hora">`+ (now.getHours()<10?'0':'') + now.getHours() +`:`+ (now.getMinutes()<10?'0':'') + now.getMinutes() +`</span>`;
            iconContainer.innerHTML = checkIcon;
            
            const currentMsg = allMessages[i];
            currentMsg.append(iconContainer);
          }
          
          mensagesLength = allMessages.length;
          audioNot.play();        
        }
      }

const allResposta = botBody.querySelector('.typebot-chat-view').querySelectorAll('.typebot-guest-bubble');  

      if(allResposta.length > respostaLength) {
          for (let i = respostaLength; i < allResposta.length; i++) {
            const iconContainer = document.createElement('div');
            now = new Date
            const checkIcon = `<span class="hora2">`+ (now.getHours()<10?'0':'') + now.getHours() +`:`+ (now.getMinutes()<10?'0':'') + now.getMinutes() +`</span><svg id="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.626 24.684" style="position: absolute;bottom: 2px;right: 5px;" height="20" width="18">
              <g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">
                <path id="Caminho_6" data-name="Caminho 6" d="M728.035,623.468l1.382,1.482,17.929-20.334" transform="translate(-1.937 -1.117)" fill="none" stroke="#29afdf" stroke-linecap="round" stroke-width="3"></path>
                <path id="Caminho_7" data-name="Caminho 7" d="M712.017,616.07l7.088,8.039,17.757-20.14" transform="translate(-1 -0.469)" fill="none" stroke="#29afdf" stroke-linecap="round" stroke-width="3"></path>
              </g>
            </svg>`;
            iconContainer.innerHTML = checkIcon;
            
            const currentMsg = allResposta[i];
            currentMsg.append(iconContainer);
          }
          
          respostaLength = allResposta.length; 
        
      }

}, 400)

var cssIdMain = 'myCssMain';
var cssIdShadow = 'myCssShadow';
var cssHref = 'https://raw.githubusercontent.com/jocilejr/csstype/main/chatecom_css_tema_whatsapp_android_light.css';

// FunÃ§Ã£o para adicionar o CSS em um determinado head
function addCssToHead(cssId, head) {
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssHref;
    link.media = 'all';
    head.appendChild(link);
}

// Adiciona o CSS no head principal (se jÃ¡ nÃ£o estiver adicionado)
if (!document.getElementById(cssIdMain)) {
    addCssToHead(cssIdMain, document.head);
}

// Adiciona o CSS no shadowRoot do typebot-standard (se jÃ¡ nÃ£o estiver adicionado)
var typebotContainer = document.getElementsByTagName("typebot-standard")[0];
if (typebotContainer && typebotContainer.shadowRoot) {
    var shadowHead = typebotContainer.shadowRoot.querySelector('.typebot-container');
    if (shadowHead && !shadowHead.querySelector('#' + cssIdShadow)) {
        addCssToHead(cssIdShadow, shadowHead);
    }
}
}
