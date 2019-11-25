export interface IdatosBasicos {
    c_cliente: Iinputs;
    c_equipo: Iinputs;
    c_empresa: Iinputs;
    c_tipoaccion: {
        titulo: string,
        placeholder: string,
        type: string,
        options: []
    };
    c_capacidadpersonas: Iinputs;
    c_capacidad: Iinputs;
    c_paradas: Iinputs;
    c_fecha: Iinputs;
    c_fechamto: Iinputs;
    c_fechapuestaservicio: Iinputs;
    c_fechaultinspeccion: Iinputs;
    c_direccioncliente: Iinputs;
    c_codigo: {
        titulo: string,
        placeholder: string,
        type: string,
        value: string,
        enabled: boolean
    };
    c_consecutivo: {
        titulo: string,
        placeholder: string,
        type: string,
        enabled: string
    };
}

export interface Iinputs {
    titulo: string;
    placeholder: string;
    type: string;
}
