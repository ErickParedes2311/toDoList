/*cuadno aplaste en el boton camnbia la clase y guarda la info para cuando otra ves entremos*/ 
const botonTema = document.getElementById('btn_tema');
const body = document.getElementById('body_id');

/*Valida y compara que clase se utilizo la ultima ves*/
let claro = sessionStorage.getItem('claro') === 'false'? false : true;


if (!claro) {
        body.classList.remove('fondo_claro');      
        body.classList.add('fondo_oscuro');      
} else {
        body.classList.remove('fondo_oscuro');      
        body.classList.add('fondo_claro');      
}

botonTema.addEventListener('click', () =>
        {
                if (claro) {
                        body.classList.remove('fondo_claro');      
                        body.classList.add('fondo_oscuro');      
                        claro = false; 
                } else {
                        body.classList.remove('fondo_oscuro');      
                        body.classList.add('fondo_claro');      
                        claro = true;  
                }

                sessionStorage.setItem('claro', claro);
        });

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*contenedor generador de notas*/
function contenedorNotas()
        {
                const inputNota = document.querySelector('.text_note');
                const notasPrincipal = document.querySelector(".notas");
                let lineaActiva = true;

                /**el contenedor que almacena las demas span y botones */
                const contentNota = document.createElement('div');
                        contentNota.classList.add('nt');
                        contentNota.id = 'content_notas';

                /*span el texto que se va a mostrar  */
                const spanTexto = document.createElement('span');
                        spanTexto.classList.add('text_nt');
                        spanTexto.textContent = inputNota.value;

                /*contenedor de los botones */
                const botonContenedor = document.createElement('div');
                        botonContenedor.classList.add('content_btn');
                
                /*Boton Para eliminar */
                const botonEliminar = document.createElement('button');
                        botonEliminar.id = 'btn_eliminar_id';
                        botonEliminar.classList.add('btn', 'btn_eliminar');
                
                const imgBasura = document.createElement('img');
                        imgBasura.src = 'src/estaticos/img/basura.svg'; 
                
                        botonEliminar.addEventListener('click', () =>
                                {
                                        contentNota.remove();
                                })
                
                /*Boton para completar Tarea */
                const botonCompletar = document.createElement('button');
                        botonCompletar.id = 'btn_completado_id';
                        botonCompletar.classList.add('btn', 'btn_completado');
                        
                const imgCompleto = document.createElement('img');
                        imgCompleto.src = 'src/estaticos/img/visto.svg'; 

                        botonCompletar.addEventListener('click', () =>
                                {
                                        if(lineaActiva === true){
                                                spanTexto.style.textDecoration = 'line-through';
                                                spanTexto.style.opacity = '.5';
                                                lineaActiva = false;
                                        }else{
                                                spanTexto.style.textDecoration = 'none';
                                                lineaActiva = true;
                                        }
                                })
                
                botonEliminar.appendChild(imgBasura);
                botonCompletar.appendChild(imgCompleto);


                botonContenedor.appendChild(botonEliminar);
                botonContenedor.appendChild(botonCompletar)

                contentNota.appendChild(spanTexto);
                contentNota.appendChild(botonContenedor);

                notasPrincipal.appendChild(contentNota);

                /*limpiar el cuadro donde escrinbimos */
                inputNota.value = "";
        }

function alertaNota()
        {       
                const divAlerta = document.createElement("div");
                        divAlerta.classList.add("ventana_alert");
                
                const textAlerta = document.createElement("p");
                        textAlerta.textContent = "Escribe una nota";

                divAlerta.appendChild(textAlerta);
                setTimeout(() =>
                        {
                                document.getElementById('body_id').appendChild(divAlerta);
                                setTimeout(() => 
                                        {
                                                divAlerta.remove();
                                        }, 3000);
                        }, 0)
        }

        /*creemos el contenedor de las notas*/ 
const botonADD = document.getElementById('btn_add');
const inputNota = document.querySelector('.text_note');
        botonADD.addEventListener('click', () => 
                {
                        if (inputNota.value.trim() !== ''){
                                contenedorNotas();
                        }else{
                                alertaNota();
                        }
                });
