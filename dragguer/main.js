$(document).ready(function(){
    //Active
    var win = window.location.pathname;
    var nothing = window.location.pathname.split('/');
    var nothingL = window.location.pathname.split('/').length;
    // console.log(nothing[nothingL-1]);
    var hasEl = function(str, char) {
        for(var i = 0; i < str.length; i++) {
          if (str[i] == char) {
            return true;
          }
        }        
        return false;
      };
      function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    var emp = isEmpty(nothing[nothingL-1]);
      if(hasEl(win, "x") == true || emp == true){
        var hed = document.getElementsByTagName('header')[0];
            hed.className = "active";       
            document.getElementsByClassName('contenedor-aplicacion')[0].style.overflow = 'hidden';
      }else{
        var hed = document.getElementsByTagName('header')[0];
        hed.className = "";        
      }  
   //OWLsliderPersonajes
   if($('.cont-slider-equipo').length){
       $('.cont-slider-equipo').owlCarousel({
           items: 1,
           nav: true,
           loop:false,
           URLhashListener:true,
           autoplayHoverPause:true,
           startPosition: 'URLHash',
           onDragged: callback
       });
       findActive();   
        $('.sidebar-gris a .cuadrito-personaje').click(function() {
           $(".sidebar-gris a .cuadrito-personaje").removeClass('cuadrito-personaje-active');    
            $(this).addClass('cuadrito-personaje-active');
            $(this).siblings('a').removeClass('cuadrito-personaje-active');
        });
        $(".owl-next").click(function(){
           $(".sidebar-gris a .cuadrito-personaje").removeClass('cuadrito-personaje-active');    
            findActive();
          });
          $(".owl-prev").click(function(){
            $(".sidebar-gris a .cuadrito-personaje").removeClass('cuadrito-personaje-active');    
             findActive();
           });
           if(prebv = document.querySelector('.owl-next')){
               navowlscambio();
           }
        }
    //end Owlslider PErsonajes
    /* funciones para el input y el Drag and Drop */
    if(document.getElementById('archivos')){
        desabilitarInputs();
        dragguerJS();
        inputClick();
    }
    /* End Drag and Drop Inputs */
    // Owl slider Quienes
        if(document.getElementsByTagName('cont-slider-quienes')){
            // $('.cont-slider-quienes').owlCarousel({
            //     items: 1,
            //     dots:false,
            //     nav: false,
            //     loop:false,
            //     lazyLoad:true,
            //     URLhashListener:true,
            //     autoplayHoverPause:true,
            //     startPosition: 'URLHash',
            //     video:true,
            //     onDragged: callbackQuienes
            // });            
            inputQuienesClick();
            spanRow();
        }
    //End Owlslider Quienes
    // logo
    // if(document.getElementsByClassName('slider-molino').length){
        logoScrollNav();
    // }
    //end Logo
    // Inpuyts formulario
    if(document.getElementsByTagName('input').length){
        inputsLabel();
    }
    // End Inpuyts formulario
    if(document.getElementsByClassName('botton-noticias')[0]){
        noticiasButon();
    }
    //end Inputs
    //Butons Quienes
    if(document.getElementsByClassName('botones-slider-quienes-somos').length){
        botonesQuienesSomos();
        mouseFollowme();
        lineTiempo();
        rippleNosotros();
        document.getElementsByClassName('contenedor-aplicacion')[0].style.overflow = 'hidden';
        var a = document.getElementsByClassName('con-palabras')[0].children;
            a[0].className = "active-hov";
    }
    //Butones Quienes    
    //3D Molino Index
        if(document.getElementsByClassName('canvas-cont').length){
            molinoTresD();
        }
    //End 3d
    //proyectos 3d
        if(document.getElementsByClassName('proyectos').length){
            var a = document.getElementsByClassName('con-palabras')[0].children;
                a[1].className = "active-hov";
            proyectos();
            // botonClickProyectos();
        }
    //END proyectos

    //start svg Animations
        if(document.getElementsByClassName('cards-desarrollo-sustentable').length){
            var a = document.getElementsByClassName('con-palabras')[0].children;
                a[2].className = "active-hov";
            scrollSvg();
            //Ripple img
            rippleJqueryRes();
        }
    //end SVG animation
    //start reconocimientos animacion
    if(document.getElementsByClassName('reconocimientos').length){
        var a = document.getElementsByClassName('con-palabras')[0].children;
            a[3].className = "active-hov";
        reconocimientos();
    }
    //end reconocimientos animacion
    // noticias start
    if(document.getElementsByClassName('noticias-pagina').length){
        var a = document.getElementsByClassName('con-palabras')[0].children;
            a[4].className = "active-hov";
            if(document.getElementsByClassName('news-c').length){
                noticiasPage(); 
            }
    }
    //noticias End
    //responsive 
        if(window.innerWidth < 767){
            
            menuRes();
        }
    //end
    if(document.getElementsByTagName('nav').length){
        buscadorDesktop();
    }
    // playvideo Index
        if(document.getElementsByClassName('playIndex').length){
            playIndex(); 
        }
    //end playvideo
    // formulario contacto validacion 
    if(document.getElementsByName('contacto-formulario').length) {        
        contactoValidacion();
    }
    if(document.getElementsByName('detalle-carrier').length){
        detalleValidacion();
    }
    // END formulario contacto validacion
    if(document.getElementsByClassName('contenedor-inversionistas').length){
        var a = document.getElementsByClassName('con-palabras')[0].children;
            a[5].className = "active-hov";
        tablesInversionistas();
    }
   /*end Jquery*/     
//    consoleLgP();
});

function botonClickProyectos(){
    let nav = document.getElementsByTagName('nav')[0].children;
    let child = nav[0].children;
    let ch = child[0].children;
    for(let n of ch){        
        n.addEventListener('click', () => {
            var h = n.getAttribute('href');
                console.log(h);
                alert();
                window.location = h;
            });
    }    
        
    
}

function spanRow(){
    $('span.down').click(function(){
        $('span.content').toggle();
        cls = document.getElementsByClassName('content')[0].style.display;
        
        if(cls == 'inline'){
            laEMpresaOff = $('.vision-mision-valores').offset().top,
            acercaZOff = $('.nuestra-empresa').offset().top,
            NuestraHOff = $('.historia').offset().top,
            equipoOff = $('.equipo').offset().top,
            accionOff = $('.accionistas').offset().top,
            final =$('.deseas').offset().top,
            butonesQuienes = $('.botones-slider-quienes-somos'),
            butonesQuienesC = $('.botones-slider-quienes-somos .content');
            
    
            var btnAQuienes = butonesQuienes.children();
                butonesQC = butonesQuienesC.children();
            
            for(i = 0; i < butonesQC.length; i++){
                butonesQC[i].addEventListener('click', function(){
                    var atributo = this.getAttribute('id');
                    var scrollTopP = $('.'+atributo).offset().top;
                    $('html, body').animate({
                        scrollTop: (scrollTopP + 10) + "px"
                    }, 1500);
                });
            }
        }
        

    })
}

function navowlscambio(){
    var prebv = document.querySelector('.owl-next');
        prebv.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="11" viewBox="0 0 60 11" class="ml-3 f-recta">
                <g fill="none" fill-rule="evenodd" stroke="#fe6e4f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M1 5h10M17 4.95h27M53.5 9.5l5-3.795-5-4.205"/>
                </g>
            </svg>
        `;
        var next = document.querySelector('.owl-prev');
        next.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="11" viewBox="0 0 60 11" class="ml-3 f-recta">
                <g fill="none" fill-rule="evenodd" stroke="#fe6e4f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M1 5h10M17 4.95h27M53.5 9.5l5-3.795-5-4.205"/>
                </g>
            </svg>
        `;
}

function findActive(){    
    var ow = document.getElementsByClassName('owl-item');
    var cuadrito = document.getElementsByClassName('cuadrito-personaje');
    for(i = 0; i < ow.length; i++){
        var cl = ow[i].classList        
        var cd = cuadrito[i].parentElement;  
        if(cl[1] == 'active'){
            var chi = ow[i].children;
            var hi = chi[0].getAttribute('data-hash');            
            var fhi = '#'+hi;
            var ar = cd.getAttribute('href');            
            if(ar === fhi){
                var cdPersonaje = cd.children;
                cdPersonaje[0].classList = 'cuadrito-personaje cuadrito-personaje-active';
            }
        }
    }
}

function callback(event) {   
    var item      = event.item.index;  
    var cuadritoDos = $('.cuadrito-personaje');
    $(".sidebar-gris a .cuadrito-personaje").removeClass('cuadrito-personaje-active');
    cuadritoDos[item].className = 'cuadrito-personaje cuadrito-personaje-active';
}

function desabilitarInputs(){
    var inputEnviar = $('.inputDisabledKnows').attr('disabled');
    if(inputEnviar === 'disabled'){
        $('.cont-inpu').css({
            'opacity': '0.4'
        })
    }else{
        $('.cont-inpu').css({
            'opacity': '1'
        })
    }
}

function dragguerJS(){
    let dropArea = document.getElementsByClassName('input-file-convert-seleciona');

    ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea[0].addEventListener(eventName, preventDefaults, false)
      })
      
      function preventDefaults (e) {
        e.preventDefault()
        e.stopPropagation()
      }

      ;['dragenter', 'dragover'].forEach(eventName => {
        dropArea[0].addEventListener(eventName, highlight, false)
      })
      
      ;['dragleave', 'drop'].forEach(eventName => {
        dropArea[0].addEventListener(eventName, unhighlight, false)
      })
      
      function highlight(e) {
        dropArea[0].classList.add('input-file-convert-seleciona-dos')
      }
      
      function unhighlight(e) {
        dropArea[0].classList.remove('input-file-convert-seleciona-dos')
      }
      
      dropArea[0].addEventListener('drop', handleDrop, false)

        function handleDrop(e) {
            let dt = e.dataTransfer
            let files = dt.files
            // console.log(files[0].name);
            let childs = document.getElementsByClassName('input-file-convert');
            let inpFiles = document.getElementById('archivos');
            let chid = childs[0].childNodes;
            chid[2].innerHTML = files[0].name;
            inpFiles.setAttribute('name', files[0].name);

            // handleFiles(files)
        }

      

}

function inputClick(){
    let inputC = document.getElementById('archivos');
    let childs = document.getElementsByClassName('input-file-convert');
    let chid = childs[0].childNodes;

    function handleFileSelect(evt) {
        var files = evt.target.files;
        chid[2].innerHTML = files[0].name;
        inputC.setAttribute('value',files[0].name);
      }
      document.getElementById('archivos').addEventListener('change', handleFileSelect, false);
}

function callbackQuienes(event){
    // console.log('slider quienes')
    // var item      = event.item.index;
    // var cuadritoDos = $('.botones-slider-quienes-somos a span');
    // $(".botones-slider-quienes-somos a span").removeClass('dot-activo-azul');
    // cuadritoDos[item].className = 'dot-activo-azul';
}

function inputQuienesClick(){
    $('.botones-slider-quienes-somos a').click(function() {
        $(".botones-slider-quienes-somos a span").removeClass('dot-activo-azul');    
        // $(this).siblings('span').addClass('dot-activo-azul');
        var hijoA= this.childNodes;
        hijoA[1].className = 'dot-activo-azul';
     });
}

function logoScrollNav(){
    var logoTope = $('nav').offset().top,
        contTextologoTrue = $('.contenedor-logo-texto'),           
        flag = false,
        scroll,
        unaVez = false,
        unaVezD = false,
        unaVezT = false;        

        if(window.innerWidth <= 767){
            
            $('.slider-molino').removeClass('capa-blanca');
            $('.contenedor-logo-texto').css({
                'display': 'none'
            }); 
        }
        if(contTextologoTrue.length){
            $(window).scroll(function(){
                 scroll = $(window).scrollTop();
                 if(parseInt(scroll) > parseInt(logoTope)){
                     if(!flag){
                         if(window.innerWidth > 768 && unaVez == false){
                             $('header').css('height', 'auto');
                             $('#logo-svg-ezquierda').animate({
                                 'top':'3.5%',
                                 'left': '10%'
                             }, 500);
                             $('#logo-svg-ezquierda a svg').animate({
                                'width': '159px'
                             }, 500);
                             $('.contenedor-logo-texto').css({
                                 'display': 'none'
                             });          
                             $('nav').show(600);
                             $('.slider-molino').removeClass('capa-blanca');                
                             unaVez = true;
                         }
                         flag =  true;
                     }
                 }
                 if(document.getElementsByClassName('somos').length){
                    var topeScrollBtn = $('.somos').offset().top;
                    if(parseInt(scroll) > (parseInt(logoTope) + 200) && scroll <  topeScrollBtn){                     
                       $('.botton-noticias').show(500); 
                    }
                    if(scroll >= topeScrollBtn){
                       $('.botton-noticias').hide(500); 
                    }
                }
            });
        }else{
            if(window.innerWidth > 768){
                $('nav').show(600);
                $('#logo-svg-ezquierda').css({
                    'top':'10px',
                    'left': '10%'
                });
                $('#logo-svg-ezquierda a svg').css({
                    'width': '159px'
                 } );
            }
        }    
}

function inputsLabel(){
    var input =  document.getElementsByTagName('input'),
        textArea = document.getElementsByTagName('textarea'),
        label = document.getElementsByTagName('label');
        if(label.length){

            for(i = 0; i < input.length;i++){
                input[i].addEventListener('click',function(){
                    var padre = this.parentNode;
                    var hijos = padre.getElementsByTagName('label')[0];
                    console.log(hijos);
                    if(typeof hijos === 'undefined'){
                        console.log('undefined');
                    }else{

                        hijos.style.fontSize = '10px';
                    }
                    
                });
            }
        
            if(textArea.length){
                textArea[0].addEventListener('click',function(){
                    var padre = this.parentNode;
                    var hijos = padre.getElementsByTagName('label')[0];
                    hijos.style.fontSize = '10px';
                    
                });
            }
        }
}

function noticiasButon(){
    var botonNoticias = document.getElementsByClassName('botton-noticias')
        noticiasBarraDerecha = $('.noticias')
        trianguloCerrar = document.getElementsByClassName('triangulo-cerrar');
    botonNoticias[0].addEventListener('click', cliqueasteButon);
    function cliqueasteButon(){
        noticiasBarraDerecha.animate({
            'right': '0px'
        }, 1000);
    }
    trianguloCerrar[0].addEventListener('click', clickeasteTriangulo);
    function clickeasteTriangulo(){
        noticiasBarraDerecha.animate({
            'right': '-100%'
        }, 1000);
    }
}

function botonesQuienesSomos(){
    butonesQuienes = $('.botones-slider-quienes-somos'),
    butonesQuienesC = $('.botones-slider-quienes-somos .content'),
    botonesTop =  butonesQuienes.offset().top,
    scroll,
    flagDos = false,
    flagTres = false,
    nuestraEmpres = $('.nuestra-empresa').offset().top,
    pCuadro = $('.primer-cuadro'),
    pCuadroOff = $('.primer-cuadro').offset().top,
    sCuadro = $('.segundo-cuadro'),
    sCuadroOff = $('.segundo-cuadro').offset().top,
    tCuadro = $('.tercer-cuadro'),
    tCuadroOff = $('.tercer-cuadro').offset().top,
    pImagen = $('.primer-imagen'),
    pImagenOff = $('.primer-imagen').offset().top,
    sImagen = $('.segunda-imagen'),
    sImagenOff = $('.segunda-imagen').offset().top,

    laEMpresaOff = $('.vision-mision-valores').offset().top,
    acercaZOff = $('.nuestra-empresa').offset().top,
    NuestraHOff = $('.historia').offset().top,
    equipoOff = $('.equipo').offset().top,
    accionOff = $('.accionistas').offset().top,
    final =$('.deseas').offset().top;

    //console.log(butonesQuienesC);
    $(window).scroll(function(){
        scroll = $(window).scrollTop();
        if(window.innerWidth > 767){

            if(scroll > botonesTop){
                if(!flagDos){
                    butonesQuienes.css({
                        'position': 'fixed'
                    });
                    butonesQuienes.addClass('botones-slider-quienes-somos-top');
                    butonesQuienes.removeClass('botones-slider-quienes-somos-bottom');
                    flagDos = true;                    
                }
            }else {
                butonesQuienes.css({
                    'position': 'absolute'
                });
                butonesQuienes.addClass('botones-slider-quienes-somos-bottom');
                butonesQuienes.removeClass('botones-slider-quienes-somos-top');
                flagDos = false;
            }
            if (scroll > (nuestraEmpres - 100)){            
                    pCuadro.css({
                        'left': '10%'
                    });
                    pImagen.animate({
                        'right': '0%'
                    }, 2000);         
            }
            if (scroll > pCuadroOff){            
                    sCuadro.css({
                        'right': '7%'
                    });            
            }
            if (scroll > sCuadroOff){            
                    sImagen.animate({
                        'right': '0%'
                    }, 1000);
            }
            if (scroll > sCuadroOff){
                    tCuadro.css({
                        'left': '15%'
                    });
            }
    
            if(scroll > laEMpresaOff && scroll < acercaZOff && flagTres == false){
                $(".botones-slider-quienes-somos a span").removeClass('dot-activo-azul');    
                $('#vision-mision-valores span').addClass('dot-activo-azul');
                $('.botones-slider-quienes-somos a').css({'background':'#e7edf3'});
                $('#vision-mision-valores').css({'background':'#dee7e9'});
                TweenMax.to('.cintilla',1, {left: '15%'});
                flagTres = true;
            }
            else{
                flagTres = false;
            } 
            
            if(scroll > acercaZOff && scroll < NuestraHOff){
                $(".botones-slider-quienes-somos a span").removeClass('dot-activo-azul');    
                $('#nuestra-empresa span').addClass('dot-activo-azul');
                $('.botones-slider-quienes-somos a').css({'background':'#e7edf3'});
                $('#nuestra-empresa').css({'background':'#dee7e9'});
                TweenMax.to('.cintilla',1, {left: '35%'});
                flagTres = true;
            }else{
                flagTres = false;
            }
            if(scroll > NuestraHOff && scroll < equipoOff){
                $(".botones-slider-quienes-somos a span").removeClass('dot-activo-azul');    
                $('#historia span').addClass('dot-activo-azul');
                $('.botones-slider-quienes-somos a').css({'background':'#e7edf3'});
                $('#historia ').css({'background':'#dee7e9'});
                TweenMax.to('.cintilla',1, {left: '55%'});
                flagTres = true;
            }else{
                flagTres = false;
            } 
            
            if(scroll > equipoOff && scroll < accionOff){
                $(".botones-slider-quienes-somos a span").removeClass('dot-activo-azul');    
                $('#equipo span').addClass('dot-activo-azul');
                $('.botones-slider-quienes-somos a').css({'background':'#e7edf3'});
                $('#equipo ').css({'background':'#dee7e9'});
                TweenMax.to('.cintilla',1, {left: '70%'});
                flagTres = true;
            }
            else {
                flagTres = false;
            }
            
            if(scroll > accionOff && scroll < final){
                $(".botones-slider-quienes-somos a span").removeClass('dot-activo-azul');    
                $('#accionistas span').addClass('dot-activo-azul');
                $('.botones-slider-quienes-somos a').css({'background':'#e7edf3'});
                $('#accionistas').css({'background':'#dee7e9'});
                TweenMax.to('.cintilla',1, {left: '88%'});
                flagTres = true;
            }else{
                flagTres = false;
            }
        }
    });
    if(innerWidth > 767){
        var btnAQuienes = butonesQuienes.children();
            butonesQC = butonesQuienesC.children();
        
        for(i = 0; i < butonesQC.length; i++){
            butonesQC[i].addEventListener('click', function(){
                //console.log(butonesQC[i]);
                var atributo = this.getAttribute('id');
                var scrollTopP = $('.'+atributo).offset().top;
                $('html, body').animate({
                    scrollTop: (scrollTopP + 10) + "px"
                }, 1500);
            });
        }
        btnAQuienes[1].addEventListener('click', function(){
            var atributo = this.getAttribute('id');
            var scrollTopP = $('.'+atributo).offset().top;
            $('html, body').animate({
                scrollTop: (scrollTopP + 10) + "px"
            }, 1500);
        });
    }
}

function mouseFollowme(){
    var imagenes = $('.cont-imagen-figura-circulo'); 
    // console.log(window.innerWidth);
    imagenes.on('mousemove', function(e){

        var t = $(this);
        var a = e.clientX - window.innerWidth / 2;
        var o = e.clientY - window.innerHeight / 2;
        TweenMax.to(t.find("figure"), .5, {
            x: a * .1,
            y: o * .1
        });
        TweenMax.to(t.find("p"), .5, {
            x: a * .01,
            y: o * .01
        });
    });

    imagenes.on('mouseleave', function(){
        var t = $(this);
        var a = 0;        
        TweenMax.to(t.find("figure"), .5, {
            x: a,
            y: 0
        });
        TweenMax.to(t.find("p"), .5, {
            x: 0,
            y: 0
        });
    });
    
        
}

function lineTiempo(){

    var years = [];
    var first = 0;
    var timelineactive = 1;
    var mesesInit = 0;
    var temautTimeLine = 0;
    var numMesesInit = 0;
    var aumentoLinea = 0;
    var meses = [];
    $('.contenedor-historias').children().each (function() {
        years.push($(this));
        console.log(years);
        if(first == 0){
            $('.years').append('<p class="year-parrafo-active">'+$(this).attr('data-year')+'</p>');
            first = 1;
            numMesesInit = $(this).children().length;
            console.log('numMesesInit : ' , numMesesInit);
            temautTimeLine = 100/numMesesInit;
            console.log('temautTimeLine : ' , temautTimeLine);
            console.log($(this).children());            
            $(this).children().each(function(){                
                aumentoLinea = temautTimeLine * mesesInit;
                console.log(aumentoLinea);
                console.log('meses',mesesInit);
                console.log('meses ', $(this).attr('data-mes'));
                console.log('meses ', $(this));
                mesesInit++;
                $('.linea-b').append('<span style="left:'+aumentoLinea+'%" id="ml" class="meses-linea" data-lm="'+mesesInit+'"><p>'+$(this).attr('data-mes')+'</p></span>');
            });
        }else{
            $('.years').append('<p>'+$(this).attr('data-year')+'</p>');
        }            
    });
    // console.log('timelinet',timelineactive);
    if(timelineactive == 1){
        var aumTimeLine = 100/mesesInit;
        var contaumTL = 1;
        var valchangeTL = 0;
        var contTL = 0;
        // console.log(aumTimeLine);
        var contArray = 0;
        var contadorYear = 1;

        setInterval(function() {  
            //    console.log(contadorYear , years.length);                      
            if(contadorYear <= years.length){                               
                if(contTL <= 100){
                    contTL = contTL + 0.01;
                    $('.linea-n').css({'width' : contTL+'%'});
                    // console.log('tiene que pasar', contaumTL ,'<=' , mesesInit);
                    if(contaumTL <= mesesInit){             

                        valchangeTL = aumTimeLine * contaumTL;                        
                        //console.log('antes del cambio');
                        if(contTL > valchangeTL){
                            // console.log('cambiamos');
                            if($('.meses').hasClass('meses-active')){
                                //animacion
                                $('.meses-active').next().addClass('animated fadeIn');                                
                                $('.meses-active').prev().removeClass('animated fadeIn');
                                $('.meses-active').prev().addClass('animated fadeIn');
                                //text
                                $('.meses .texto-historia').addClass('animated fadeIn');
                                $('.meses .texto-fecha span').addClass('animated bounceInUp');
                                $('.meses .texto-fecha p:nth-of-type(1)').addClass('animated bounceInDown');
                                $('.meses .texto-fecha .anim').addClass('animated bounceInLeft');
                                //
                                $('.meses-active').next().addClass('meses-active');
                                $('.meses-active').prev().removeClass('meses-active');
                            }
                            contArray++;// contador para recorrer array
                            contaumTL++;// MUltiplicador para avance de linea del tiempo
                            console.log(contaumTL)
                        }
                    }
                }else{
                    contTL = 0;
                    mesesInit = 0;
                    //
                    $('.year-active').next().addClass('animated fadeIn');
                    //
                    $('.year-active').next().addClass('year-active');
                    $('.year-active').prev().removeClass('year-active');
                    if($('.contenedor-historias').children().hasClass('year-active')){
                        $('.year-active').children().first().addClass('meses-active');
                    }
                    $('.linea-b').html('');
                    numMesesInit = $('.year-active').children().length;
                    temautTimeLine = 100/numMesesInit;
                    $('.year-active').children().each(function(){
                        aumentoLinea = temautTimeLine * mesesInit;
                        mesesInit++;
                        $('.linea-b').append('<span style="left:'+aumentoLinea+'%" id="ml" class="meses-linea" data-lm="'+mesesInit+'"><p>'+$(this).attr('data-mes')+'</p></span>');
                    });
                    $('.year-parrafo-active').next().addClass('year-parrafo-active');
                    $('.year-parrafo-active').prev().removeClass('year-parrafo-active');
                    aumTimeLine = 100/mesesInit;
                    contadorYear++;
                    // console.log('contTl'+contTL);
                    // console.log('mesesInit'+mesesInit);
                    // console.log('aumTimeLine'+aumTimeLine);
                    // console.log('acabo año');
                    // console.log('contadorYear '+contadorYear);
                }
            }
            else{
                // console.log('enter');
                contaumTL = 1;
                contadorYear = 1;
                contTL = 0;
                mesesInit = 0;
                $('.years').children().removeClass('year-parrafo-active');
                $('.years').children().first().addClass('year-parrafo-active');
                $('.contenedor-historias').children().removeClass('year-active');
                $('.contenedor-historias').children().first().addClass('year-active');
                $('.linea-b').html('');
                numMesesInit = $('.year-active').children().length;
                temautTimeLine = 100/numMesesInit;
                $('.meses').removeClass('meses-active');
                    $('.year-active').children().each(function(){
                        if(mesesInit == 0){
                            $(this).addClass('meses-active');
                        }
                        aumentoLinea = temautTimeLine * mesesInit;
                        mesesInit++;
                        $('.linea-b').append('<span style="left:'+aumentoLinea+'%" id="ml" class="meses-linea" data-lm="'+mesesInit+'"><p>'+$(this).attr('data-mes')+'</p></span>');
                    });
                aumTimeLine = 100/mesesInit;
                // console.log('contTl'+contTL);
                // console.log('mesesInit'+mesesInit);
                // console.log('aumTimeLine'+aumTimeLine);
                // console.log('reiniciamos');
            }
        }, 1);
    }

    $('.linea-b').on('click', '.meses-linea', function() {        
        var numMes = $(this).attr('data-lm');
        console.log('numero de mes',numMes, aumTimeLine);
        var newaumTimeLine = aumTimeLine * (numMes - 1 );
        console.log(aumTimeLine);
        contTL = newaumTimeLine;
        var contadorMeses = 1;
        // console.log(contTL);
        $('.year-active').children().removeClass('meses-active');
        $('.year-active').children().each(function(){
            if(numMes == contadorMeses){
                $(this).addClass('meses-active');
            }
            contadorMeses++;
        });
    });

    // $('.years').children().click(function(){
    //     contadorYear = 1;
    //     contTL = 0;
    //     mesesInit = 0;
    //     $('.years').children().removeClass('year-parrafo-active');
    //     $(this).addClass('year-parrafo-active');
    //     $('.linea-b').html('');
    //     var valanio = $(this).html();
    //     $('.contenedor-historias').children().removeClass('year-active');
    //     $('.contenedor-historias').children().each(function(){
    //         if($(this).attr('data-year') == valanio){
    //             $(this).addClass('year-active');
    //         }
    //     });
    //     $('.year-active').children().first().addClass('meses-active');
    //     $('.year-active').children().each(function(){
    //         mesesInit++;
    //         $('.linea-b').append('<span id="ml" class="meses-linea" data-lm="'+mesesInit+'"><p>'+$(this).attr('data-mes')+'</p></span>');
    //     });
    //     aumTimeLine = 100/mesesInit;
    // });
// var contHistorias =  document.getElementsByClassName('contenedor-historias')[0].children,
//     contHistoriasLength = contHistorias.length,
//     yea = document.getElementsByClassName('years')[0],
//     yeaChildrens = yea.children,
//     meses = document.getElementsByClassName('meses'),
//     mesesLength = meses.length;
//     // contCirculosB = document.getElementsByClassName('linea-b')[0].children,
//     // contCirculosLength = contCirculosB.length;
//     for(i=0; i < contHistorias.length; i++){
//         var years = contHistorias[i].getAttribute('data-year'),
//         createP = document.createElement('p');          
//         createP.textContent = years;
//         yea.appendChild(createP);
//     }
//     yeaChildrens[0].className = 'year-parrafo-active';
//     for(a = 0; a < yeaChildrens.length; a++){
//         yeaChildrens[a].addEventListener('click', function(){
//             alert();
//         });
//     }
//     for(b = 0; b < mesesLength; b++){
//         console.log(meses[b]);
//     }
}

function molinoTresD(){ 
    initDos();
    function initDos(){
        
			var scene, camera, pointLight, stats;
			var renderer, mixer, controls;
			var ww = window.innerWidth,
				hf = window.innerWidth / 2,
				wh = window.innerHeight;

			var clock = new THREE.Clock();
			var container = document.getElementById( 'canvas-contenedor' );

			renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.gammaOutput = true;
				renderer.gammaFactor = 2.2;
				container.appendChild( renderer.domElement );
				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xffffff );
			camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100 );
				camera.position.set( 4.8, 2.3, 2 );
            
            var pointLight = new THREE.PointLight( 0xffffff, 0.2);
				pointLight.position.set(50, 50, 20);
				scene.add( pointLight );
				
			var ambienLight = new THREE.AmbientLight( 0x404040 ); // soft white light
                scene.add( ambienLight );
                console.log(ambienLight);

			var direcctional = new THREE.DirectionalLight( 0xffffff, 1 );
			scene.add( direcctional );

				// RAYCASTER
				var raycaster = new THREE.Raycaster();
                var mouse = new THREE.Vector2();
                var mouse = {x:0,y:0};
                var cameraMoves = {x:0,y:0,z:-0.1,move:false,speed:0.2};


				function onDocumentMouseDown( event ) {							
					event.preventDefault();
					document.addEventListener( 'mousemove', onDocumentMouseMove, false );
					document.addEventListener( 'mouseup', onDocumentMouseUp, false );
					document.addEventListener( 'mouseout', onDocumentMouseOut, false );					
				}
				function onDocumentMouseMove( e ) {
					
					// camera.x = ( event.clientX / container.offsetWidth ) * 2 - 1;
					// camera.y = ( event.clientX / container.offsetHeight ) * 2 + 1;
                    var mousy = (e.clientX/container.offsetWidth) * 20;          
                    //camera.position.y += Math.max(Math.min((mouse.y - e.clientY) * 0.01, cameraMoves.speed), -cameraMoves.speed);
                    camera.position.x += Math.max(Math.min((-(e.clientX) + mouse.x) * 0.01, cameraMoves.speed), -cameraMoves.speed);
                        console.log(camera.position.x);                        
                        console.log(camera.position.z);                        

                        mouse.x = e.clientX;
                        mouse.y = e.clientY;          			

                        if(camera.position.x  < 4.8){
                            camera.position.x = 4.8;
                            document.getElementsByClassName('eloicos-3-d')[0].className = 'eloicos-3-d tres-d-activo';                        
                           document.getElementsByClassName('solares-3-d')[0].className = 'solares-3-d';                      
                           console.log('ji');
                           let eloicos = document.getElementsByClassName('pelh');
                            let solar = document.getElementsByClassName('psh');
                            eloicos[0].style.display = 'block';
                            eloicos[1].style.display = 'block';
                            solar[0].style.display = 'none';
                            solar[1].style.display = 'none';
                            
                        }
                        if(camera.position.x > 18.66){
                            camera.position.x = 18.66;
                            document.getElementsByClassName('solares-3-d')[0].className = 'solares-3-d tres-d-activo';                        
                           document.getElementsByClassName('eloicos-3-d')[0].className = 'eloicos-3-d';
                           let eloicos = document.getElementsByClassName('pelh');
                            let solar = document.getElementsByClassName('psh');
                            eloicos[0].style.display = 'none';
                            eloicos[1].style.display = 'none';
                            solar[0].style.display = 'block';
                            solar[1].style.display = 'block';
                            
                        }       
                        
                        if(camera.position.z < 0 && camera.position.x <= 4.8){
                            console.log('hello')
                            tl = new TimelineMax();
                            tl.to(camera.position, 3, {z: 2, y: 2.3});	                            
                        }

                }
				function onDocumentMouseUp() {
					document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
					document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
					document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
				}
				function onDocumentMouseOut() {
					document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
					document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
					document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
				}
				
                // mouse event listeners
                var contTop = $('.sec-cards').offset().top,
                    resp = $('.resp-social').offset().top,
                    can = $('#canvas-contenedor').offset().top,
                    scroll,
                    flag = false;
                    $(window).scroll(function(){
                        scroll = $(window).scrollTop();
                        console.log(scroll);
                        console.log(flag);
                        if(window.innerWidth > 767 && scroll >= can && flag == false){
                            console.log('enter');
                            tl = new TimelineMax();
                            tl.to(camera.position, 2, {x: 5.5});
                            tl.to(camera.position, 2, {x: 4.8});
                            flag = true;
                        }
                        if(window.innerWidth > 767 && scroll >= contTop && scroll < resp){                            
                            console.log('entro 2' );
                            document.addEventListener( 'mousedown', onDocumentMouseDown, false );
                            // flag = true
                            document.getElementsByClassName('eloicos-3-d')[0].addEventListener('click', () => {
                            tl = new TimelineMax();
                            tl.to(camera.position, 5, {x: 4.8, z: 2, y: 2.3});			
                           document.getElementsByClassName('eloicos-3-d')[0].className = 'eloicos-3-d tres-d-activo';                        
                           document.getElementsByClassName('solares-3-d')[0].className = 'solares-3-d';                      
                           console.log('ji');
                           let eloicos = document.getElementsByClassName('pelh');
                            let solar = document.getElementsByClassName('psh');
                            eloicos[0].style.display = 'block';
                            eloicos[1].style.display = 'block';
                            solar[0].style.display = 'none';
                            solar[1].style.display = 'none';
                        });
                        document.getElementsByClassName('solares-3-d')[0].addEventListener('click', () => {
                            tl = new TimelineMax();
                            tl.to(camera.position, 5, {x: 18.66,z: -1, y: 1.5});
                           this.className = 'solares-3-d';
                           document.getElementsByClassName('solares-3-d')[0].className = 'solares-3-d tres-d-activo';                        
                           document.getElementsByClassName('eloicos-3-d')[0].className = 'eloicos-3-d';
                           let eloicos = document.getElementsByClassName('pelh');
                            let solar = document.getElementsByClassName('psh');
                            eloicos[0].style.display = 'none';
                            eloicos[1].style.display = 'none';
                            solar[0].style.display = 'block';
                            solar[1].style.display = 'block';
                        });
                        }else {
                            document.removeEventListener( 'mousedown', onDocumentMouseDown, false );
                            flag = false
                            document.getElementsByClassName('eloicos-3-d')[0].addEventListener('click', () => {
                            tl = new TimelineMax();
                            tl.to(camera.position, 2, {x: 4.8, z: 2, y: 2.3});			
                           document.getElementsByClassName('eloicos-3-d')[0].className = 'eloicos-3-d tres-d-activo';                        
                           document.getElementsByClassName('solares-3-d')[0].className = 'solares-3-d';                      
                           console.log('ji');
                           let eloicos = document.getElementsByClassName('pelh');
                            let solar = document.getElementsByClassName('psh');
                            eloicos[0].style.display = 'block';
                            eloicos[1].style.display = 'block';
                            solar[0].style.display = 'none';
                            solar[1].style.display = 'none';
                        });
                        document.getElementsByClassName('solares-3-d')[0].addEventListener('click', () => {
                            tl = new TimelineMax();
                            tl.to(camera.position, 2, {x: 18.66,z: -1, y: 1.5});
                           this.className = 'solares-3-d';
                           document.getElementsByClassName('solares-3-d')[0].className = 'solares-3-d tres-d-activo';                        
                           document.getElementsByClassName('eloicos-3-d')[0].className = 'eloicos-3-d';
                           let eloicos = document.getElementsByClassName('pelh');
                        let solar = document.getElementsByClassName('psh');
                        eloicos[0].style.display = 'none';
                        eloicos[1].style.display = 'none';
                        solar[0].style.display = 'block';
                        solar[1].style.display = 'block';
                        });
                        }
                        if(window.innerWidth < 767 && scroll >= contTop)  {
                            document.getElementsByClassName('eloicos-3-d')[0].addEventListener('click', () => {
                                tl = new TimelineMax();
                                tl.to(camera.position, 2, {x: 4.8, z: 2, y: 2.3});			
                            document.getElementsByClassName('eloicos-3-d')[0].className = 'eloicos-3-d tres-d-activo';                        
                            document.getElementsByClassName('solares-3-d')[0].className = 'solares-3-d';                      
                            console.log('ji');
                            let eloicos = document.getElementsByClassName('pelh');
                            let solar = document.getElementsByClassName('psh');
                            eloicos[0].style.display = 'block';
                            eloicos[1].style.display = 'block';
                            solar[0].style.display = 'none';
                            solar[1].style.display = 'none';
                            });
                            document.getElementsByClassName('solares-3-d')[0].addEventListener('click', () => {
                                tl = new TimelineMax();
                                tl.to(camera.position, 2, {x: 18.66,z: -1, y: 1.5});
                            this.className = 'solares-3-d';
                            document.getElementsByClassName('solares-3-d')[0].className = 'solares-3-d tres-d-activo';                        
                            document.getElementsByClassName('eloicos-3-d')[0].className = 'eloicos-3-d';
                            let eloicos = document.getElementsByClassName('pelh');
                        let solar = document.getElementsByClassName('psh');
                        eloicos[0].style.display = 'none';
                        eloicos[1].style.display = 'none';
                        solar[0].style.display = 'block';
                        solar[1].style.display = 'block';
                            });
                        }       

                    })
                


			THREE.DRACOLoader.setDecoderPath( './libs/draco/gltf/' );

			var loader = new THREE.GLTFLoader();
				loader.setDRACOLoader( new THREE.DRACOLoader() );
				loader.load( '../img/models/gltf/turbina_d.gltf', function ( gltf ) {

				var model = gltf.scene;
					model.position.set( 5, 1, 0 );
					model.scale.set( 0.01, 0.01, 0.01 );

				scene.add( model );

				mixer = new THREE.AnimationMixer( model );
				mixer.clipAction( gltf.animations[ 0 ] ).play();

				animate();

			}, undefined, function ( e ) {console.error( e );} );

			var loaderD = new THREE.GLTFLoader();
				loaderD.setDRACOLoader( new THREE.DRACOLoader() );
				loaderD.load( '../img/models/gltf/sf3.gltf', function ( gltf ) {

                var model = gltf.scene;				                
                    model.position.set( 25, 4, -30  );
					model.rotation.y = 1;
					model.rotation.x = -0.1;
					model.scale.set( 0.01, 0.01, 0.01 );

				scene.add( model );	

			}, undefined, function ( e ) {console.error( e );} );

			var loaderT = new THREE.GLTFLoader();
				loaderT.setDRACOLoader( new THREE.DRACOLoader() );
				loaderT.load( '../img/models/gltf/sf3.gltf', function ( gltf ) {

                var model = gltf.scene;				                
					model.position.set(25, 4, -16 );
					model.rotation.y = 0.7;
					model.scale.set( 0.01, 0.01, 0.01 );
				scene.add( model );	

			}, undefined, function ( e ) {console.error( e );} );

			window.onresize = function () {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			};
			function animate() {
				requestAnimationFrame( animate );
				var delta = clock.getDelta();
				mixer.update( delta );
				// controls.update( delta );
				renderer.render( scene, camera );

            }            


    }
}

function proyectos(){
    var btUno = document.getElementsByClassName('botton-p-so-el')[0],
        btndos = document.getElementsByClassName('boton-p-open')[0],
        parquesTodos = document.getElementsByClassName('parques-modelo-3d')[0];

        document.getElementsByClassName('logo-m')[0].style.zIndex = 4;

        btUno.addEventListener('click', () => {
            parquesTodos.style.left = '-200%';
        });
        btndos.addEventListener('click', () => {
            parquesTodos.style.left = '0%';
        });

        //
        init();
            function init(){
                
                    var scene, camera, pointLight, stats;
                    var renderer, mixer, controls;
                    var ww = window.innerWidth,
                        hf = window.innerWidth / 2,
                        wh = window.innerHeight;

                    var clock = new THREE.Clock();
                    var container = document.getElementById( 'mapa-3d' );
                    console.log(container);

                    renderer = new THREE.WebGLRenderer( { antialias: true } );
                        renderer.setPixelRatio( window.devicePixelRatio );
                        renderer.setSize( window.innerWidth, window.innerHeight );
                        renderer.gammaOutput = true;
                        renderer.gammaFactor = 2.2;
                        container.appendChild( renderer.domElement );
                        scene = new THREE.Scene();
                        scene.background = new THREE.Color( 0xf2f2f2 );
                    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100 );
                        camera.position.set( 4.9,4.5, 3 );
                        camera.rotation.x = -0.8
                        // console.log(camera.position);
                    // controls = new THREE.OrbitControls( camera, renderer.domElement );
                    // 	controls.target.set( 0, 0.5, 0 );
                    // 	controls.enablePan = false;

                    //Lights


                    // scene.add( new THREE.AmbientLight( 0x404040 ) );
                    // var pointLight = new THREE.PointLight( 0xffffff, 0.2);
                    // 	pointLight.position.set(50, 50, 50);
                    // 	scene.add( pointLight );
                        
                    // var ambienLight = new THREE.AmbientLight( 0x404040 ); // soft white light
                    // 	scene.add( ambienLight );

                    // var direcctional = new THREE.DirectionalLight( 0xffffff, 0.2 );
                    // scene.add( direcctional );
                    // var light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
                    // 	light.position.set( 0, 20, 0 );
                    // 	scene.add( light );
                    var ambient = new THREE.AmbientLight( 0xffffff, 0.3 );
                        // ambient.position.set(0,-5,6)
                        // console.log('ambien ',ambient.position);
                        scene.add( ambient );
                        spotLight = new THREE.SpotLight( 0xffffff, 1 );
                        spotLight.position.set( 2, 40, 10 );
                        console.log(spotLight.position);
                        spotLight.angle = Math.PI / 4;
                        spotLight.penumbra = 0.05;
                        spotLight.decay = 2;
                        spotLight.distance = 200;
                        spotLight.castShadow = true;
                        spotLight.shadow.mapSize.width = 1024;
                        spotLight.shadow.mapSize.height = 1024;
                        spotLight.shadow.camera.near = 10;
                        spotLight.shadow.camera.far = 200;
                        scene.add( spotLight );
                        // lightHelper = new THREE.SpotLightHelper( spotLight );
                        // scene.add( lightHelper );
                        // shadowCameraHelper = new THREE.CameraHelper( spotLight.shadow.camera );
                        // scene.add( shadowCameraHelper );
                    
                        //Ground
                        // var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 4000, 3000 ), new THREE.MeshPhongMaterial( { color: 0xf2f2f2, depthWrite: false } ) );
                        //     mesh.rotation.x = - Math.PI / 2;
                        //     scene.add( mesh );
                        // var grid = new THREE.GridHelper( 200, 40, 0xffffff, 0xffffff );
                        //     grid.material.opacity = 0.2;
                        //     grid.material.transparent = true;
                        //     scene.add( grid );

                        // RAYCASTER
                        var raycaster = new THREE.Raycaster();
                        var mouse = new THREE.Vector2();
                    

                    THREE.DRACOLoader.setDecoderPath( '../img/models/gltf/mapados/' );

                    var loader = new THREE.GLTFLoader();
                        loader.setDRACOLoader( new THREE.DRACOLoader() );
                        loader.load( '../img/models/gltf/mapados/mapa_4.gltf', function ( gltf ) {

                        var model = gltf.scene;
                            model.position.set( 4.4, 1.5, 2 );
                            console.log('camera',camera.position)
                            model.scale.set( 0.01, 0.01, 0.01 );					
                            model.rotation.set(-1.8,0,0)		                            		
                            console.log('model',model.position);			
                            scene.add( model );
                            mixer = new THREE.AnimationMixer( model );
                            mixer.clipAction( gltf.animations[ 0 ] ).play();

                        animate();
                            if(innerWidth > 767 ){

                                function onMouseMove(event) {
                                        event.preventDefault();
            
                                        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                                        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            
                                        raycaster.setFromCamera(mouse, camera);
            
                                        var intersects = raycaster.intersectObjects(scene.children, true);
                                        for (var i = 0; i < intersects.length; i++) {                                    
            
                                            if(intersects[i].object.name == 'tamps_polySurface1'){
                                                          
                                                    $('.parque-eolico-con-3-d').addClass('parque-activo');
                                                    $('.c-p-b').addClass('capa-blanca-proyectos');
                                                    cualStamosSlider();  
                                                    this.tl = new TimelineMax();
                                                    this.tl.to(model.position, 1, {x: 5.4, y:-1,z: 2, ease: Expo.easeOut});
                                                    this.tl.to(camera.position, 0.6, {x:6.5, y: 1, z:2, ease: Expo.easeOut});
                                                    $('.boton-p-open').css({'visibility': 'hidden'})
                                                    
                                                }
            
                                                if(intersects[i].object.name == 'oax_polySurface1'){
                                                    $('.parque-ingenio-con-3-d').addClass('parque-activo');
                                                    $('.c-p-b').addClass('capa-blanca-proyectos');
                                                    cualStamosSlider();
                                                    this.tl = new TimelineMax();
                                                    this.tl.to(model.position, 1, {x: 5.4, y:1,z: 2, ease: Expo.easeOut});                                            
                                                    this.tl.to(camera.position, 0.6, {x:6.6, y: 2.5, z:2.4, ease: Expo.easeOut});
                                                    $('.boton-p-open').css({'visibility': 'hidden'})
                                                }
            
                                                if(intersects[i].object.name == 'son_polySurface1'){
                                                    
                                                    $('.parque-solar-con-3-d').addClass('parque-activo');
                                                    $('.c-p-b').addClass('capa-blanca-proyectos');
                                                    cualStamosSlider();
                                                    this.tl = new TimelineMax();
                                                    this.tl.to(camera.position, 0.6, {x:4.4, y: 5.2, z:2, ease: Expo.easeOut});
                                                    this.tl.to(model.position, 1, {x: 4.6, y:3.0,z: 2.3, ease: Expo.easeOut}); 
                                                    $('.boton-p-open').css({'visibility': 'hidden'})  
                                                    console.log(model.position);                                         
                                                }
                                                if(intersects[i].object.name == 'polySurface1'){
                                                    
                                                    $('.parque-santa-con-3-d').addClass('parque-activo');
                                                    $('.c-p-b').addClass('capa-blanca-proyectos');
                                                    cualStamosSlider();
                                                    this.tl = new TimelineMax();
                                                    this.tl.to(camera.position, 2, {x:4.8, y: 5.2, z:2, ease: Expo.easeOut});
                                                    this.tl.to(model.position, 1, {x: 4.6, y:3.0,z: 2.3, ease: Expo.easeOut});
                                                    $('.boton-p-open').css({'visibility': 'hidden'}) 
                                                }
                                            }
                                            
                                        }
                                                $('.boton-exit').on('click', function() {
                                                    var video = document.getElementsByClassName('parque-activo')[0].getElementsByClassName('video-slider-par')[0];
                                                    // var iPause = $('.parque-activo').find('.fa-pause-circle');
                                                    // var iPlay = $('.parque-activo').find('.fa-pause-circle');
                                                    if(video.currentTime > 0){
                                                            video.pause();
        
                                                    }   else {
                                                        console.log('off')
                                                    }                           
                                                    $('.parque-activo').removeClass('parque-activo');
                                                    $('.c-p-b').removeClass('capa-blanca-proyectos');
                                                    this.tl = new TimelineMax();
                                                    this.tl.to(model.position, 1, {x: 4.4, y:1.5,z: 2, ease: Expo.easeOut}); 
                                                    this.tl.to(camera.position, 0.6, {x:4.9, y: 4.5, z:3, ease: Expo.easeOut});
                                                    $('.boton-p-open').css({'visibility': 'visible'})  
                                                });
                                                $('.c-p-b').on('click', function() {                                   
                                                    $('.parque-activo').removeClass('parque-activo');
                                                    $('.c-p-b').removeClass('capa-blanca-proyectos');
                                                    this.tl = new TimelineMax();
                                                    this.tl.to(model.position, 1, {x: 4.4, y:1.5,z: 2, ease: Expo.easeOut}); 
                                                    this.tl.to(camera.position, 0.6, {x:4.9, y: 4.5, z:3, ease: Expo.easeOut});
                                                });
        
                                                $('body > div > div.parques-modelo-3d > div.parques-s-texto.parques > a:nth-child(3)').on('click', function (){
                                                    console.log(parquesTodos);
                                                    parquesTodos.style.left = '-200%';
                                                    $('.boton-p-open').css({'visibility': 'hidden'});                                                    
        
                                                    $('.parque-solar-con-3-d').addClass('parque-activo');
                                                    $('.c-p-b').addClass('capa-blanca-proyectos');
                                                    cualStamosSlider();
                                                    this.tl = new TimelineMax();
                                                    this.tl.to(camera.position, 0.6, {x:4.4, y: 5.2, z:2, ease: Expo.easeOut});
                                                    this.tl.to(model.position, 1, {x: 4.6, y:2.5,z: 2.3, ease: Expo.easeOut});    
                                                    console.log('parque solar con 3 d la orejana');
                                                });
                                                $('body > div > div.parques-modelo-3d > div.parques-s-texto.parques > a:nth-child(4)').on('click', function(){
                                                    console.log(parquesTodos);
                                                    parquesTodos.style.left = '-200%';
                                                    $('.boton-p-open').css({'visibility': 'hidden'});                                                    
        
                                                    $('.parque-santa-con-3-d').addClass('parque-activo');
                                                    $('.c-p-b').addClass('capa-blanca-proyectos');
                                                    cualStamosSlider();
                                                    this.tl = new TimelineMax();
                                                    this.tl.to(camera.position, 0.6, {x:4.4, y: 5.2, z:2, ease: Expo.easeOut});
                                                    this.tl.to(model.position, 1, {x: 4.6, y:2.5,z: 2.3, ease: Expo.easeOut}); 
                                                    console.log('parque solar con 3 d la santa');

                                                });
                                                $('body > div > div.parques-modelo-3d > div.parques-e-texto.parques.mt-5 > a:nth-child(3)').on('click', function (){
                                                    console.log(parquesTodos);
                                                    parquesTodos.style.left = '-200%';
                                                    $('.boton-p-open').css({'visibility': 'hidden'});                                                    
        
                                                    $('.parque-ingenio-con-3-d').addClass('parque-activo');
                                                    $('.c-p-b').addClass('capa-blanca-proyectos');
                                                    cualStamosSlider();
                                                    this.tl = new TimelineMax();
                                                    this.tl.to(model.position, 1, {x: 5.4, y:1,z: 2, ease: Expo.easeOut});
                                                    this.tl.to(camera.position, 0.6, {x:6.6, y: 2.5, z:2.4, ease: Expo.easeOut});
                                                    console.log('parque solar con 3 d la ingenio');
                                                });
                                                $('body > div > div.parques-modelo-3d > div.parques-e-texto.parques.mt-5 > a:nth-child(4)').on('click', function (){
                                                    console.log(parquesTodos);
                                                    parquesTodos.style.left = '-200%';
                                                    $('.boton-p-open').css({'visibility': 'hidden'});                                                    
        
                                                    $('.parque-eolico-con-3-d').addClass('parque-activo');
                                                    $('.c-p-b').addClass('capa-blanca-proyectos');
                                                    cualStamosSlider();
                                                    this.tl = new TimelineMax();
                                                    this.tl.to(model.position, 1, {x: 5.4, y:-1,z: 2, ease: Expo.easeOut});
                                                    this.tl.to(camera.position, 0.6, {x:6.5, y: 1, z:2, ease: Expo.easeOut});
                                                    console.log('parque reynosa ');
                                                });
                                                $('.eloicos').on('click', function (){
                                                    var video = document.getElementsByClassName('parque-activo')[0].getElementsByClassName('video-slider-par')[0];
                                                    // var iPause = $('.parque-activo').find('.fa-pause-circle');
                                                    // var iPlay = $('.parque-activo').find('.fa-pause-circle');
                                                    if(video.currentTime > 0){
                                                            video.pause();
        
                                                    }                      
                                                    $('.parque-activo').removeClass('parque-activo');
                                                    $('.parque-eolico-con-3-d').addClass('parque-activo');  
                                                    cualStamosSlider();                                                  
                                                    this.tl = new TimelineMax();
                                                    this.tl.to(model.position, 1, {x: 5.4, y:-1,z: 2, ease: Expo.easeOut});
                                                    this.tl.to(camera.position, 0.6, {x:6.5, y: 1, z:2, ease: Expo.easeOut});
                                                });
                                                $('.solares').on('click', function (){
                                                    var video = document.getElementsByClassName('parque-activo')[0].getElementsByClassName('video-slider-par')[0];
                                                    // var iPause = $('.parque-activo').find('.fa-pause-circle');
                                                    // var iPlay = $('.parque-activo').find('.fa-pause-circle');
                                                    if(video.currentTime > 0){
                                                            video.pause();
        
                                                    }                      
                                                    $('.parque-activo').removeClass('parque-activo');
                                                    $('.parque-solar-con-3-d').addClass('parque-activo'); 
                                                    cualStamosSlider();
                                                    this.tl = new TimelineMax();
                                                    this.tl.to(camera.position, 0.6, {x:4.4, y: 5.2, z:2, ease: Expo.easeOut});
                                                    this.tl.to(model.position, 1, {x: 4.6, y:3.0,z: 2.3, ease: Expo.easeOut});                 
                                                });
                                                $(".svgP").on('click', function(){
                                                    var cll = $('.parque-activo').attr('class').split(' ');
                                                    switch (cll[0]) {
                                                        case 'parque-eolico-con-3-d':
                                                        var video = document.getElementsByClassName('parque-activo')[0].getElementsByClassName('video-slider-par')[0];                                                            
                                                            if(video.currentTime > 0){video.pause();}                      
                                                            $('.parque-activo').removeClass('parque-activo');
                                                            $('.parque-santa-con-3-d').addClass('parque-activo'); 
                                                            cualStamosSlider();
                                                            this.tl = new TimelineMax();
                                                            this.tl.to(camera.position, 2, {x:4.8, y: 5.2, z:2, ease: Expo.easeOut});
                                                            this.tl.to(model.position, 1, {x: 4.6, y:3.0,z: 2.3, ease: Expo.easeOut});
                                                            break;
                                                        case 'parque-ingenio-con-3-d':
                                                        var video = document.getElementsByClassName('parque-activo')[0].getElementsByClassName('video-slider-par')[0];                                                            
                                                            if(video.currentTime > 0){video.pause();}                      
                                                            $('.parque-activo').removeClass('parque-activo');
                                                            $('.parque-eolico-con-3-d').addClass('parque-activo'); 
                                                            cualStamosSlider();
                                                            this.tl = new TimelineMax();   
                                                            this.tl.to(model.position, 1, {x: 5.4, y:-1,z: 2, ease: Expo.easeOut});
                                                            this.tl.to(camera.position, 0.6, {x:6.5, y: 1, z:2, ease: Expo.easeOut});                                                                                                      
                                                            break;
                                                        case 'parque-solar-con-3-d':
                                                        var video = document.getElementsByClassName('parque-activo')[0].getElementsByClassName('video-slider-par')[0];                                                            
                                                            if(video.currentTime > 0){video.pause();}                      
                                                            $('.parque-activo').removeClass('parque-activo');
                                                            $('.parque-ingenio-con-3-d').addClass('parque-activo'); 
                                                            cualStamosSlider();
                                                            this.tl = new TimelineMax();
                                                            this.tl.to(model.position, 1, {x: 5.4, y:1,z: 2, ease: Expo.easeOut});                                            
                                                            this.tl.to(camera.position, 0.6, {x:6.6, y: 2.5, z:2.4, ease: Expo.easeOut});
                                                            
                                                            break;
                                                        case 'parque-santa-con-3-d':
                                                        var video = document.getElementsByClassName('parque-activo')[0].getElementsByClassName('video-slider-par')[0];                                                            
                                                            if(video.currentTime > 0){video.pause();}                      
                                                            $('.parque-activo').removeClass('parque-activo');
                                                            $('.parque-solar-con-3-d').addClass('parque-activo'); 
                                                            cualStamosSlider();
                                                            this.tl = new TimelineMax();
                                                            this.tl.to(camera.position, 0.6, {x:4.4, y: 5.2, z:2, ease: Expo.easeOut});
                                                            this.tl.to(model.position, 1, {x: 4.6, y:3.0,z: 2.3, ease: Expo.easeOut}); 
                                                            
                                                            
                                                            break;
                                                        default:
                                                            break;
                                                    }
                                                    
                                                });
                                        
                                                $(".svgN").click(function(){
                                                    var cll = $('.parque-activo').attr('class').split(' ');
                                                    switch (cll[0]) {
                                                        case 'parque-eolico-con-3-d':
                                                        var video = document.getElementsByClassName('parque-activo')[0].getElementsByClassName('video-slider-par')[0];                                                            
                                                            if(video.currentTime > 0){video.pause();}                      
                                                            $('.parque-activo').removeClass('parque-activo');
                                                            $('.parque-ingenio-con-3-d').addClass('parque-activo');

                                                            cualStamosSlider();
                                                            this.tl = new TimelineMax();

                                                            this.tl.to(model.position, 1, {x: 5.4, y:1,z: 2, ease: Expo.easeOut});                                            
                                                            this.tl.to(camera.position, 0.6, {x:6.6, y: 2.5, z:2.4, ease: Expo.easeOut});
                                                            break;
                                                        case 'parque-ingenio-con-3-d':
                                                        var video = document.getElementsByClassName('parque-activo')[0].getElementsByClassName('video-slider-par')[0];                                                            
                                                            if(video.currentTime > 0){video.pause();}                      
                                                            $('.parque-activo').removeClass('parque-activo');
                                                            $('.parque-solar-con-3-d').addClass('parque-activo');

                                                            cualStamosSlider();
                                                            this.tl = new TimelineMax();                                                                                                       

                                                            this.tl.to(camera.position, 0.6, {x:4.4, y: 5.2, z:2, ease: Expo.easeOut});
                                                            this.tl.to(model.position, 1, {x: 4.6, y:3.0,z: 2.3, ease: Expo.easeOut});

                                                            break;
                                                        case 'parque-solar-con-3-d':
                                                        var video = document.getElementsByClassName('parque-activo')[0].getElementsByClassName('video-slider-par')[0];                                                            
                                                            if(video.currentTime > 0){video.pause();}                      
                                                            $('.parque-activo').removeClass('parque-activo');
                                                            $('.parque-santa-con-3-d').addClass('parque-activo');

                                                            cualStamosSlider();
                                                            this.tl = new TimelineMax();
                                                            this.tl.to(camera.position, 2, {x:4.8, y: 5.2, z:2, ease: Expo.easeOut});
                                                            this.tl.to(model.position, 1, {x: 4.6, y:3.0,z: 2.3, ease: Expo.easeOut});


                                                            
                                                            break;
                                                        case 'parque-santa-con-3-d':
                                                        var video = document.getElementsByClassName('parque-activo')[0].getElementsByClassName('video-slider-par')[0];                                                            
                                                            if(video.currentTime > 0){video.pause();}                      
                                                            $('.parque-activo').removeClass('parque-activo');
                                                            $('.parque-eolico-con-3-d').addClass('parque-activo');

                                                            cualStamosSlider();
                                                            this.tl = new TimelineMax();
                                                            this.tl.to(model.position, 1, {x: 5.4, y:-1,z: 2, ease: Expo.easeOut});
                                                            this.tl.to(camera.position, 0.6, {x:6.5, y: 1, z:2, ease: Expo.easeOut});
                                                            break;
                                                        default:
                                                            break;
                                                    }
                                                    
                                                    }); 
            
                                $('#mapa-3d').on('click', () => {
                                    window.addEventListener('click', onMouseMove);
                                });
                            }
                    }, undefined, function ( e ) {console.error( e );} );
                    
                    window.onresize = function () {
                        camera.aspect = window.innerWidth / window.innerHeight;
                        camera.updateProjectionMatrix();
                        renderer.setSize( window.innerWidth, window.innerHeight );
                    };
                    function animate() {
                        requestAnimationFrame( animate );
                        var delta = clock.getDelta();
                        mixer.update( delta );
                        // controls.update( delta );
                        renderer.render( scene, camera );

                    }
                    if(window.innerWidth > 767){
                        redireccionar();
                    }
                            function redireccionar(){
                                var 
                                    logo = document.getElementsByClassName('logo-m')[0]
                                    logohijos= logo.children;
                                    // hijosA =  nav[0].children,
                                    // hijosB = nav[1].children,
                                    menuRes = document.getElementsByClassName('lista-respo')[0].children;
                                    
                                    let nav = document.getElementsByTagName('nav')[0].children;
                                    let child = nav[0].children;
                                    let ch = child[0].children;
                                    for(let n of ch){        
                                        n.addEventListener('click', () => {
                                            var h = n.getAttribute('href');                                                
                                                window.location = h;
                                            });
                                    }    
    
                                    logo.addEventListener('click', () => {
                                        hijoHref= logohijos[0].getAttribute('href');
                                        window.location = hijoHref;
                                    });  
                            }
                    if(window.innerWidth < 767){
                        $('.boton-exit').on('click', function() {
                            var video = document.getElementsByClassName('parque-activo')[0].getElementsByClassName('video-slider-par')[0];                            
                            if(video.currentTime > 0){
                                    video.pause();

                            }                          
                            $('.parque-activo').removeClass('parque-activo');
                            $('.c-p-b').removeClass('capa-blanca-proyectos');                           
                        });
                        $('.c-p-b').on('click', function() {                                   
                            $('.parque-activo').removeClass('parque-activo');
                            $('.c-p-b').removeClass('capa-blanca-proyectos');                            
                        });

                        $('body > div > div.parques-modelo-3d > div.parques-s-texto.parques > a:nth-child(3)').on('click', function (){
                            console.log(parquesTodos);
                            parquesTodos.style.left = '-200%';
                            parquesTodos.style.visibility = 'hidden';

                            $('.parque-solar-con-3-d').addClass('parque-activo');
                            $('.c-p-b').addClass('capa-blanca-proyectos');
                            cualStamosSlider();                           
                        });
                        $('body > div > div.parques-modelo-3d > div.parques-s-texto.parques > a:nth-child(4)').on('click', function(){
                            console.log(parquesTodos);
                            parquesTodos.style.left = '-200%';
                            parquesTodos.style.visibility = 'hidden';

                            $('.parque-santa-con-3-d').addClass('parque-activo');
                            $('.c-p-b').addClass('capa-blanca-proyectos');
                            cualStamosSlider();                            
                        });
                        $('body > div > div.parques-modelo-3d > div.parques-e-texto.parques.mt-5 > a:nth-child(3)').on('click', function (){
                            console.log(parquesTodos);
                            parquesTodos.style.left = '-200%';
                            parquesTodos.style.visibility = 'hidden';

                            $('.parque-ingenio-con-3-d').addClass('parque-activo');
                            $('.c-p-b').addClass('capa-blanca-proyectos');
                            cualStamosSlider();                            
                        });
                        $('body > div > div.parques-modelo-3d > div.parques-e-texto.parques.mt-5 > a:nth-child(4)').on('click', function (){
                            console.log(parquesTodos);
                            parquesTodos.style.left = '-200%';
                            parquesTodos.style.visibility = 'hidden';

                            $('.parque-eolico-con-3-d').addClass('parque-activo');
                            $('.c-p-b').addClass('capa-blanca-proyectos');
                            cualStamosSlider();                            
                        });
                    }

            }
        //        

        function cualStamosSlider(){
            
            var parteActiva = $('.parque-activo').find('.slider-eolicos'),
                parteActivaDos = document.getElementsByClassName('parque-activo')[0],
                hijosActivo = parteActivaDos.children,
                hijoSlider =  hijosActivo[0].children,
                botonesSlider = hijoSlider[0].children,
                hijosVideo = botonesSlider[0].children,
                dotss = hijoSlider[0].getElementsByClassName('owl-dots');
                crearI = document.createElement('i');
                iConClasse = crearI.className  = 'far fa-play-circle plays';               
                videoItems = $('.item-video');                  
                parteActiva.owlCarousel({
                            items: 1,
                            dots:true,
                            nav: true,
                            loop:false,
                            lazyLoad:true,
                            URLhashListener:true,
                            autoplayHoverPause:true,
                            startPosition: 'URLHash',
                            video:true,
                            onDragged: stopVideo
                        });                            
            
                function stopVideo(e){
                    var item  = e.item.index;  
                    botonesSlider[0].getElementsByTagName('video')[0]  
                    childrenVideo = botonesSlider[0].getElementsByTagName('video')[0];
                    // var i = botonesSlider[0].getElementsByTagName('i')[0];
                    // clasUno = i.getAttribute('class');
                    if(item == 0){
                        hijosVideo[0].play(); 
                        // i.className = 'far fa-pause-circle playSliderPlay';
                    }else if(item > 0){
                        hijosVideo[0].pause();
                        // i.className = 'far fa-play-circle playSliderPlay';
                    }                    
                }
        
            var dots =  botonesSlider[2].children,
                owlStage = botonesSlider[0].children,
                owlStages =  owlStage[0].children;
                for(e=0; e < dots.length; e++){
                    dots[e].addEventListener('click', () => {
                         var vedaderoPlay = botonesSlider[0].getElementsByTagName('video')[0].paused;
                            botonesSlider[0].getElementsByTagName('video')[0]  
                            childrenVideo = botonesSlider[0].getElementsByTagName('video')[0];
                        var i = botonesSlider[0].getElementsByTagName('i')[0];
                         if(vedaderoPlay){                            

                        }else{
                            botonesSlider[0].getElementsByTagName('video')[0].pause();
                            i.className = 'far fa-play-circle playSliderPlay';
                        }
                    });
                }
                for(a = 0; a < owlStages.length; a++){
                        figures = owlStages[a];
                        img = figures.children;
                        imgs = img[0].children;
                        imgsF = imgs[0].getAttribute('src');
                        if(imgsF === null){
                            dots[a].style.background = '#000';
                            if(dots[a].getElementsByTagName('i').length){
                                
                            }else{
                                dots[a].appendChild(crearI);
                            }
                        }else{
                            dots[a].style.background =  "url"+"("+imgsF+")";
                        }
                    }                                      
                
    }           
    
    document.getElementsByClassName('contenedor-aplicacion')[0].style.overflow = 'hidden';

}

function scrollSvg(){

    var cdUno = $('.cards-d-uno').offset().top,
        desarrollo = $('.cards-desarrollo-sustentable').offset().top,
        cdDos = $('.cards-d-dos').offset().top,
        cdTres = $('.cards-d-tres').offset().top,
        cdCuatro = $('.cards-d-cuatro').offset().top,
        final = $('.becas').offset().top,
        svgNOne = $('.svg-uno-card text'),
        svgNTwo = $('.svg-dos-card text'),
        svgNThree = $('.svg-tres-card text'),
        svgNFour = $('.svg-cuatro-card text'),
        svgLineaU = $('.linea-uno-a-scroll path'),
        svgLineaD = $('.linea-dos-a-scroll path'),
        svgLineaT = $('.linea-tres-a-scroll path'),
        svgLineaC = $('.linea-cuatro-a-scroll path'),
        flag = false,
        scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();
        if(scroll > (desarrollo - 300)){            
            var clases= $('.cards-d-uno').attr('class').split(' ');            
            if(clases.length == 2){
                $('.cards-d-uno').addClass('card-d-activo');
                svgNOne.css({
                    'fill': '#fff'
                });
                svgLineaU.css({
                    'stroke': '#fff'
                });
            }
            flag = true
        }else{
            flag = false
        }
        if(scroll > (cdDos - 300)){ 
            var clases= $('.cards-d-dos').attr('class').split(' ');
            if(clases.length == 2){                
                $('.cards-d-uno').removeClass('card-d-activo');
                 $('.cards-d-uno').addClass('card-d-desactivo');
                $('.cards-d-dos').addClass('card-d-activo');
                svgNTwo.css({
                    'fill': '#fff'
                });
                svgNOne.css({
                    'fill': '#0874A6'
                });
                svgLineaU.css({
                    'stroke': '#36B3D6'
                });
                svgLineaD.css({
                    'stroke': '#fff'
                });
            }           
            flag = true
        }else{
            flag = false
        }
        if(scroll > (cdTres - 360)){   
            var clases= $('.cards-d-tres').attr('class').split(' ');
            if(clases.length == 2){  
                $('.cards-d-tres').addClass('card-d-activo');
                $('.cards-d-dos').removeClass('card-d-activo');
                $('.cards-d-dos').addClass('card-d-desactivo');
                svgNTwo.css({
                    'fill': '#0874A6'
                });
                svgNThree.css({
                    'fill': '#fff'
                });
                svgLineaD.css({
                    'stroke': '#36B3D6'
                });
                svgLineaT.css({
                    'stroke': '#fff'
                });
            }         
            flag = true
        }else{
            flag = false
        }
        if(scroll > (cdCuatro - 300)){     
            var clases= $('.cards-d-cuatro').attr('class').split(' ');
            if(clases.length == 2){
                $('.cards-d-cuatro').addClass('card-d-activo');
                $('.cards-d-tres').removeClass('card-d-activo');
                 $('.cards-d-tres').addClass('card-d-desactivo');
                 svgNThree.css({
                    'fill': '#0874A6'
                });
                svgNFour.css({
                    'fill': '#fff'
                });
                svgLineaT.css({
                    'stroke': '#36B3D6'
                });
                svgLineaC.css({
                    'stroke': '#fff'
                });
            }       
            flag = true
        }else{
            flag = false
        }
        if(scroll > (final - 300)){                               
                $('.cards-d-cuatro').removeClass('card-d-activo');
                 $('.cards-d-cuatro').addClass('card-d-desactivo');
                 svgNFour.css({
                    'fill': '#0874A6'
                });
                svgLineaC.css({
                    'stroke': '#36B3D6'
                });
            
            flag = true
        }else{
            flag = false
        }
    });

        var controller = new ScrollMagic.Controller();

        function pathPrepare($el) {
            var lineLength = $el[0].getTotalLength();
                $el.css("stroke-dasharray", lineLength);
                $el.css("stroke-dashoffset", lineLength);
        }
        var $line1 = $("path#linea-uno-a-scroll");
        var $line2 = $("path#linea-dos-a-scroll");
        var $line3 = $("path#linea-tres-a-scroll");
        var $line4 = $("path#linea-cuatro-a-scroll");

        pathPrepare($line1);
        pathPrepare($line2);
        pathPrepare($line3);
        pathPrepare($line4);

        var draw = new TimelineMax();
        draw
        .add(TweenMax.to($line1, 4, {
            strokeDashoffset: 0,
            ease: Linear.easeNone
        })) 
        var drawDos = new TimelineMax();
        drawDos
        .add(TweenMax.to($line2, 4, {
            strokeDashoffset: 0,
            ease: Linear.easeNone
        }))  
        var drawtres = new TimelineMax();
        drawtres
        .add(TweenMax.to($line3, 4, {
            strokeDashoffset: 0,
            ease: Linear.easeNone
        }))  
        var drawCuatro = new TimelineMax();
        drawCuatro
        .add(TweenMax.to($line4, 4, {
            strokeDashoffset: 0,
            ease: Linear.easeNone
        }))   

        // build scene
        var scene = new ScrollMagic.Scene({
            duration: 800,
            triggerElement: ".cards-d-uno",
            tweenChanges: true
        })
        .setTween(draw)
        .addTo(controller);  

        // build scene
        var scene = new ScrollMagic.Scene({
            duration: 900,
            triggerElement: ".cards-d-dos",
            tweenChanges: true
        })
        .setTween(drawDos)
        .addTo(controller);  
        // build scene
        var scene = new ScrollMagic.Scene({
            duration: 400,
            triggerElement: ".cards-d-tres",
            tweenChanges: true
        })
        .setTween(drawtres)
        .addTo(controller);  
        // build scene
        var scene = new ScrollMagic.Scene({
            duration: 400,
            triggerElement: ".cards-d-cuatro",
            tweenChanges: true
        })
        .setTween(drawCuatro)
        .addTo(controller);  
}

function reconocimientos(){
    var flag = false,
        scroll;
        
        // $(window).scroll(() => {
        //     scroll = $(window).scrollTop();
        //     console.log(scroll);
        //     if(scroll > 0 && flag == false){
                TweenMax.staggerTo(".cuadros-hijos", 0, {x: 0 }, 0.2 );
                flag = true;
        //     }        
            
        // });

}

function noticiasPage(){
        var scroll,
            flaggy = false,
            unoC = ($('.news-c').offset().top - 200);
    // $(window).scroll( () => {
    //     scroll = $(window).scrollTop();
    //     if (flaggy == false && scroll > unoC){            
            TweenMax.staggerTo('.cdr-news', 0, {x: 0 , delay:0.5}, 0.2 );
            // flaggy = true;
    //     }
    // });
}

function rippleJqueryRes(){
    $('.resp-img figure').ripples({
        resolution: 512,
        dropRadius: 10,
        perturbance: 0.015
    });
}

function rippleNosotros(){
    $('.cont-slider-quienes figure').ripples({
        resolution: 512,
        dropRadius: 10,
        perturbance: 0.015
    });
}

function menuRes(){
    var menu = document.getElementsByClassName('menu-rep')[0],
        nav = document.getElementsByClassName('nav-responsive')[0],
        crotch = document.getElementsByClassName('cross-resp')[0],
        aLen = document.getElementsByClassName('c-l')[0],
        aLenD = document.getElementsByClassName('c-l')[1];
    menu.addEventListener('click', () => {
        nav.style.left = 0;
    })
    crotch.addEventListener('click', () => {
        nav.style.left = '-130%';
    })

    aLen.addEventListener('click', () => {
        var clase = aLen.className.split(' ');
        var clasD = aLenD.className.split(' ');
        if(clase[1] == 'leng-active' && clasD.length == 1){
            aLenD.className = 'c-l leng-active';

        }else if (clase[1] == 'leng-active' && clasD[1] == 'leng-active'){            
            aLenD.className = 'c-l';
        }
    });
    aLenD.addEventListener('click', () => {
        var clase = aLen.className.split(' ');
        var clasD = aLenD.className.split(' ');
        if(clasD[1] == 'leng-active' && clase.length == 1){
            aLen.className = 'c-l leng-active';

        }else if (clasD[1] == 'leng-active' && clase[1] == 'leng-active'){            
            aLen.className = 'c-l';
        }
    });
}

function buscadorDesktop(){
    var busDesk = document.getElementsByClassName('fa-search-open')[0],
        busDeskCh = document.getElementsByClassName('c-buscador')[0],
        crossDes = document.getElementsByClassName('equis-busc')[0],
        english = document.getElementsByClassName('engl-desk-cont')[0],
        engChild = english.children;
        // console.log(crossDes);
    busDesk.addEventListener('click', () => {
        busDeskCh.className =" c-buscador c-b-on d-flex flex-column justify-content-center align-items-center";
    });
    crossDes.addEventListener('click', () => {
        busDeskCh.className =" c-buscador c-b-off ";

    });
    engChild[0].addEventListener('click', () => {
        var clase = engChild[0].className.split(' ');
        var clasD = engChild[1].className.split(' ');
        visibl = engChild[1].style.visibility;     
        // console.log(visibl);   
        if(clase[1] ==  'lang-active-d' && visibl != 'visible'){
            engChild[1].style.visibility = 'visible'
        }else if (clase[1] ==  'lang-active-d' && visibl == 'visible' ){
            engChild[1].style.visibility = 'hidden'        
        }
        
    });
    
    engChild[1].addEventListener('click', () => {
        var clase = engChild[0].className.split(' ');
        var clasD = engChild[1].className.split(' ');
        visibl = engChild[1].style.visibility;     
        // console.log(visibl);   
        if(clase[1] == 'lang-active-d'){
            engChild[0].className = 'engl-desk';
            engChild[1].className = 'engl-desk lang-active-d';
        }else if(clasD[1] == 'lang-active-d'){
            engChild[0].className = 'engl-desk lang-active-d'; 
            engChild[1].className = 'engl-desk';
        }
        
    });
    
}

function playIndex(){
    var play = document.getElementsByClassName('playIndex')[0],
        video = document.getElementsByClassName('video-resp')[0],
        hijos = video.children,
        textVideo = document.getElementsByClassName('vid-text')[0],
        framBlue = document.getElementsByClassName('frame-azul')[0];
        console.log(hijos[2]);
    play.addEventListener('click', () => {                                    
                    attr = play.getAttribute('class').split(' ');
                    console.log(attr);
                    if(attr[1] == 'fa-play-circle'){
                        hijos[2].play(); 
                        play.className = 'far fa-pause-circle playIndex';
                        textVideo.style.opacity = '0';
                        textVideo.style.visibility = 'hidden';
                        framBlue.style.visibility = 'hidden';
                    }else{
                        hijos[2].pause();
                        play.className = 'far fa-play-circle playIndex';
                        textVideo.style.opacity = '1';
                        textVideo.style.visibility = 'visible';
                        framBlue.style.visibility = 'visible';
                    } 
    })
}

function contactoValidacion(){
    var form = document.getElementsByName('contacto-formulario')[0],
        boton = document.getElementById('btn-sub');
       var validarCampos =  function (e){
            console.log(form.nombre.value);
            if(form.nombre.value == 0 || isNaN(form.nombre.value) == false){
                e.preventDefault();
                $('#nombre').css({
                    'border': '1px solid red'
                });
            }

            if(form.email.value == 0 || isNaN(form.email.value) == false){
                e.preventDefault();
                $('#email').css({
                    'border': '1px solid red'
                });
            }
            if(form.informacion.value == 0 || isNaN(form.informacion.value) == false){
                e.preventDefault();
                $('#informacion').css({
                    'border': '1px solid red'
                });
            }
        }

        var validarNumeros = function(e){
            if(isNaN(form.nombre.value) == false){
                e.preventDefault();
                $('#nombre').css({
                    'border': '1px solid #F15A29'
                });
            }

            if(isNaN(form.email.value) == false){
                e.preventDefault();
                $('#email').css({
                    'border': '1px solid #F15A29'
                });
            }
            if(isNaN(form.informacion.value) == false){
                e.preventDefault();
                $('#informacion').css({
                    'border': '1px solid #F15A29'
                });
            }

        }

        var checkForm = function(e){
            if(form.terminos.checked == true){

            }else{
                e.preventDefault();
                alert('Por Favor Acepta Nuestros Terminos');
            }

        }

       var  validarFormulario =  function (e){           
           $('#nombre').css({
               'border': '1px solid transparent'
           });
            $('#email').css({
                'border': '1px solid transparent'
            });
            $('#informacion').css({
                'border': '1px solid transparent'
            });
            validarCampos(e);
            validarNumeros(e);
            checkForm(e);
        }
        form.addEventListener('submit', validarFormulario);

}

function detalleValidacion() {
    var formDeta = document.getElementsByName('detalle-carrier')[0],
        btnCarrier = document.getElementById('detalle-btn');

       var validarCampos =  function (e){
            
            if(formDeta.nombre.value == 0 || isNaN(formDeta.nombre.value) == false){
                e.preventDefault();
                $('#nombre').css({
                    'border': '1px solid red'
                });
            }

            if(formDeta.email.value == 0 || isNaN(formDeta.email.value) == false){
                e.preventDefault();
                $('#email').css({
                    'border': '1px solid red'
                });
            }
            if(formDeta.celular.value == 0 ){
                e.preventDefault();
                $('#celular').css({
                    'border': '1px solid red'
                });
            }
            if(formDeta.linke.value == 0 || isNaN(formDeta.linke.value) == false){
                e.preventDefault();
                $('#linkedin').css({
                    'border': '1px solid red'
                });
            }
            if(formDeta.cvlink.value == 0 || isNaN(formDeta.cvlink.value) == false){
                e.preventDefault();
                $('#linkedin').css({
                    'border': '1px solid red'
                });
            }
        }

        var validarNumeros = function(e){           
        
            if(isNaN(formDeta.nombre.value) == false){
                e.preventDefault();
                $('#cv-link').css({
                    'border': '1px solid #F15A29'
                });
            }

            if(isNaN(formDeta.email.value) == false){
                e.preventDefault();
                $('#email').css({
                    'border': '1px solid #F15A29'
                });
            }
            if(isNaN(formDeta.celular.value) == true){
                
                e.preventDefault();
                $('#celular').css({
                    'border': '1px solid #F15A29'
                });
            }
            if(isNaN(formDeta.linke.value) == false){
                e.preventDefault();
                $('#linkedin').css({
                    'border': '1px solid #F15A29'
                });
            }
            

        }

        var checkForm = function(e){
            if(formDeta.checkterminos.checked == true){

            }else{
                e.preventDefault();
                alert('Por Favor Acepta Nuestros Terminos');
            }

        }

       var  validarFormulario =  function (e){           
           $('#nombre').css({
               'border': '1px solid transparent'
           });
            $('#email').css({
                'border': '1px solid transparent'
            });
            $('#celular').css({
                'border': '1px solid transparent'
            });
            $('#linkedin').css({
                'border': '1px solid transparent'
            });
            validarCampos(e);
            validarNumeros(e);
            checkForm(e);
        }
        formDeta.addEventListener('submit', validarFormulario);
}

function tablesInversionistas(){
    var tablaUno = document.getElementById('tablaUno'),
        tbody = tablaUno.children,
        trs = tbody[1].children,
        btnUno = document.getElementById('btn-table-uno'),
        nRecientes = document.getElementById('noticias-financieras-recientes'),
        hijosnRecientes = nRecientes.children,
        hjs = hijosnRecientes[0].children,
        btcDos = document.getElementById('btn-noticias-recientes');           
    btnUno.addEventListener('click', (e) => {        
        for(a = 0; a < trs.length ; a++){
            if(trs[a].className == '' && trs[(a-1)].className == 'active'){
                trs[a].className = 'active';
                break;
            }
        }

    });
    btcDos.addEventListener('click', (e) => {
        console.log(hjs[1].className);
        for(a = 1; a < hjs.length - 1 ; a++){
            if(hjs[a].className == 'not-financiera mt-5' && hjs[(a - 1)].className == 'not-financiera mt-5 active'){
                hjs[a].className = 'not-financiera mt-5 active';
                break;
            }
        }

    });
}

function consoleLgP(){
    console.log('%c visit https://rodrigofigueroa.github.io/cvr/','background: #004d61;color: white; padding: 10px;border-radius: 10px;');
}