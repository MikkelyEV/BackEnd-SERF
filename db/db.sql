CREATE TABLE OFICINA(
id_oficina int not null auto_increment,
clave_oficina Varchar(100) Not null,
Primary key(id_oficina)
);

CREATE TABLE PRIMA_PENDIENTE(
id_fianza Varchar(100) Not null,
id_oficina int Not null,
nombre_fiado Varchar(100) Not null,
tipo_movimiento Varchar(100) Not null,
antiguedad int not null,
dias_vencimiento int not null,
importe int not null,
Primary key(id_fianza),
 Foreign key (id_oficina) REFERENCES OFICINA(id_oficina)
);