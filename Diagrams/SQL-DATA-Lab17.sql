-- Datos para la tabla de Usuarios (User)
INSERT INTO User (IdUser, firstName, lastName, age, gender, email, username, password) VALUES
(1, "John", "Doe", 30, 'M', "john.doe@example.com", "johndoe", "password123"),
(2, "Alice", "Smith", 25, 'F', "alice.smith@example.com", "alicesmith", "abc123"),
(3, "Michael", "Johnson", 35, 'M', "michael.johnson@example.com", "michaelj", "securepass"),
(4, "Emily", "Brown", 28, 'F', "emily.brown@example.com", "emilyb", "password456"),
(5, "David", "Wilson", 40, 'M', "david.wilson@example.com", "davidw", "pass123"),
(6, "Sophia", "Martinez", 22, 'F', "sophia.martinez@example.com", "sophiam", "hello123"),
(7, "Daniel", "Taylor", 33, 'M', "daniel.taylor@example.com", "danielt", "dantay2023"),
(8, "Olivia", "Anderson", 29, 'F', "olivia.anderson@example.com", "oliviaa", "abcxyz"),
(9, "Ethan", "Thomas", 31, 'M', "ethan.thomas@example.com", "ethant", "ethomas789"),
(10, "Ava", "Hernandez", 27, 'F', "ava.hernandez@example.com", "avah", "avapass");

-- Datos para la tabla de Roles (Role)
INSERT INTO Role (IdRole, descriptionRole) VALUES
(1, "Customer"),
(2, "Seller");

-- Datos para la tabla de Asignaciones de Roles a Usuarios (Have)
INSERT INTO Have (IdUser, IdRole) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 1),
(6, 2),
(7, 2),
(8, 1),
(9, 2),
(10, 1);

-- Datos para la tabla de Privilegios (Privilege)
INSERT INTO Privilege (IdPrivilege, descriptionPrivilege) VALUES
(1, "Create Product"),
(2, "Edit Product"),
(3, "Delete Product"),
(4, "View Orders"),
(5, "Process Payments");

-- Datos para la tabla de Asignaciones de Privilegios a Roles (Own)
INSERT INTO Own (IdRole, IdPrivilege) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5);

-- Datos para la tabla de Vendedores (Seller)
INSERT INTO Seller (IdUser, earnings, phone, address) VALUES
(4, 1000.00, "1234567890", "123 Main St, City, Country"),
(7, 750.50, "9876543210", "456 Oak St, City, Country"),
(9, 1200.75, "5555555555", "789 Elm St, City, Country"),
(10, 890.25, "3333333333", "321 Pine St, City, Country"),
(3, 650.00, "7777777777", "654 Maple St, City, Country");

-- Datos para la tabla de Pagos (Payment)
INSERT INTO Payment (IdPayment, paymentMethod) VALUES
(1, "Credit Card"),
(2, "PayPal"),
(3, "Bank Transfer"),
(4, "Cash on Delivery"),
(5, "Stripe");

-- Datos para la tabla de Órdenes (Order)
INSERT INTO `Order` (IdOrder, IdUser, IdPayment, orderNumber, orderDate, deleted, paid) VALUES
(1, 1, 1, "ORD123", '2024-04-01', FALSE, TRUE),
(2, 2, 2, "ORD456", '2024-04-02', FALSE, TRUE),
(3, 3, 3, "ORD789", '2024-04-03', FALSE, TRUE),
(4, 4, 4, "ORD234", '2024-04-04', FALSE, TRUE),
(5, 5, 5, "ORD567", '2024-04-05', FALSE, TRUE);

-- Datos para la tabla de Productos (Product)
INSERT INTO Product (IdProduct, IdUser, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail) VALUES
(1, 4, "iPhone 9", "An apple mobile which is nothing like apple", 549, 12.96, 4.5, 94, "Apple", "smartphones", "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"),
(2, 7, "iPhone X", "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...", 899, 17.94, 4.44, 34, "Apple", "smartphones", "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"),
(3, 9, "Samsung Universe 9", "Samsung's new variant which goes beyond Galaxy to the Universe", 1249, 15.46, 4.09, 36, "Samsung", "smartphones", "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg"),
(4, 10, "OPPOF19", "OPPO F19 is officially announced on April 2021.", 280, 17.91, 4.3, 123, "OPPO", "smartphones", "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"),
(5, 3, "Huawei P30", "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.", 499, 10.58, 4.09, 32, "Huawei", "smartphones", "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg");

-- Datos para la tabla de Carritos (Cart)
INSERT INTO Cart (IdCart) VALUES
(1),
(2),
(3),
(4),
(5);

-- Datos para la tabla de Productos en Carritos (Includes)
INSERT INTO Includes (IdCart, IdProduct, price, quantity, discount, total, date) VALUES
(1, 1, 799.99, 1, 0.00, 799.99, '2024-04-01'),
(2, 2, 1299.99, 1, 0.00, 1299.99, '2024-04-02'),
(3, 3, 199.99, 2, 0.00, 399.98, '2024-04-03'),
(4, 4, 149.99, 1, 0.00, 149.99, '2024-04-04'),
(5, 5, 899.99, 1, 0.00, 899.99, '2024-04-05');
