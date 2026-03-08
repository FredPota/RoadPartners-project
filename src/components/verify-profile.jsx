function VerifyProfile({setisediting}) {
    return (
        <div className="modal-overlay">
            <div className="bg-PageLight-950 w-1/3 h-auto p-5 rounded-4xl relative text-PageDark-950">
                <form className="login-form" action="">
                    <h2 className="title-form">Verificación de Perfil</h2>
                    <p className="text-tiny" >Para verificar tu perfil, por favor sube una foto de tu documento de identidad(INE o parecidos) y una selfie. Ambos documentos serán revisados por administradores de la pagina. Una vez revisados, su identificación será borrada de nuestra base de datos, y la foto pasara a ser su foto de perfil, asegurese que la foto sea realizada desde una perspectiva similar a la de su identificación</p>

                    <div className="flex flex-col h-full w-full  gap-2 p-3 border-y border-PageLight-300">
                        <div className="login-group-center">
                            <label className="input-label" htmlFor="id-document">Documento de identidad:</label>
                            <input className="input-file" type="file" accept=".png*"  name="id-document" id="id-document" />
                        </div>
                        <div className="login-group-center">
                            <label className="input-label" htmlFor="selfie">Foto propia:</label>
                            <input className="input-file" type="file" accept=".png*" enctype="multipart/form-data" name="selfie" id="selfie" />
                        </div>
                    </div>
                    
                    
                    <button className="btnSubmit-form" onClick={() => {setisediting('')}}>Enviar archivos para verificación</button>
                    <button className="exit-btn" onClick={() => setisediting('')}>x</button>

                </form>
            </div>
        </div>
    );
};

export default VerifyProfile;