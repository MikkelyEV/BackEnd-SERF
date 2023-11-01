CREATE TABLE OFICINA(
id_oficina int not null auto_increment,
clave_oficina text Not null,
Primary key(id_oficina)
);

CREATE TABLE PRIMA_PENDIENTE(
id_fianza serial Not null,
id_oficina int Not null,
nombre_fiado text Not null,
tipo_movimiento text Not null,
fecha_inicio date Not null,
fecha_fin date Not null,
importe int not null,
Primary key (id_fianza),
 Foreign key (id_oficina) REFERENCES OFICINA(id_oficina)
);