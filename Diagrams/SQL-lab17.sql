-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS ecommerce;

-- Usar la base de datos
USE ecommerce;

-- Tabla de Usuarios
CREATE TABLE User (
    IdUser INT PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    age INT,
    gender CHAR(1),
    email VARCHAR(100),
    username VARCHAR(255),
    password VARCHAR(255)
);

-- Tabla de Roles
CREATE TABLE Role (
    IdRole INT PRIMARY KEY,
    descriptionRole VARCHAR(100)
);

-- Tabla de Asignaciones de Roles a Usuarios
CREATE TABLE Have (
    IdUser INT,
    IdRole INT,
    PRIMARY KEY (IdUser, IdRole),
    FOREIGN KEY (IdUser) REFERENCES User(IdUser),
    FOREIGN KEY (IdRole) REFERENCES Role(IdRole)
);

-- Tabla de Privilegios
CREATE TABLE Privilege (
    IdPrivilege INT PRIMARY KEY,
    descriptionPrivilege VARCHAR(100)
);

-- Tabla de Asignaciones de Privilegios a Roles
CREATE TABLE Own (
    IdRole INT,
    IdPrivilege INT,
    PRIMARY KEY (IdRole, IdPrivilege),
    FOREIGN KEY (IdRole) REFERENCES Role(IdRole),
    FOREIGN KEY (IdPrivilege) REFERENCES Privilege(IdPrivilege)
);

-- Tabla de Vendedores
CREATE TABLE Seller (
    IdUser INT PRIMARY KEY,
    earnings DECIMAL(10, 2),
    phone VARCHAR(15),
    address VARCHAR(100),
    FOREIGN KEY (IdUser) REFERENCES User(IdUser)
);

-- Tabla de Pagos
CREATE TABLE Payment (
    IdPayment INT PRIMARY KEY,
    paymentMethod VARCHAR(50)
);

-- Tabla de Órdenes
CREATE TABLE Cart (
    IdCart INT PRIMARY KEY,
    IdUser INT,
    IdPayment INT,
    orderNumber VARCHAR(20),
    orderDate DATE,
    deleted BOOLEAN,
    paid BOOLEAN,
    FOREIGN KEY (IdUser) REFERENCES User(IdUser),
    FOREIGN KEY (IdPayment) REFERENCES Payment(IdPayment)
);

-- Tabla de Productos
CREATE TABLE Product (
    IdProduct INT PRIMARY KEY,
    IdUser INT,
    title VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    discountPercentage DECIMAL(5, 2),
    rating DECIMAL(3, 2),
    stock INT,
    brand VARCHAR(50),
    category VARCHAR(50),
    thumbnail VARCHAR(100),
    FOREIGN KEY (IdUser) REFERENCES User(IdUser)
);

-- Tabla de Productos en Carritos
CREATE TABLE Includes (
    IdCart INT,
    IdProduct INT,
    price DECIMAL(10, 2),
    quantity INT,
    discount DECIMAL(5, 2),
    total DECIMAL(10, 2),
    date DATE,
    PRIMARY KEY (IdCart, IdProduct),
    FOREIGN KEY (IdCart) REFERENCES Cart(IdCart),
    FOREIGN KEY (IdProduct) REFERENCES Product(IdProduct)
);
