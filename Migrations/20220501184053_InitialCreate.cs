using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace aspnetcore_with_reactspa.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    CategoryID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CategoryName = table.Column<string>(type: "TEXT", maxLength: 15, nullable: true),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    Picture = table.Column<byte[]>(type: "BLOB", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.CategoryID);
                });

            migrationBuilder.CreateTable(
                name: "Suppliers",
                columns: table => new
                {
                    SupplierID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CompanyName = table.Column<string>(type: "TEXT", maxLength: 40, nullable: false),
                    ContactName = table.Column<string>(type: "TEXT", maxLength: 30, nullable: true),
                    ContactTitle = table.Column<string>(type: "TEXT", maxLength: 30, nullable: true),
                    Adress = table.Column<string>(type: "TEXT", maxLength: 60, nullable: true),
                    City = table.Column<string>(type: "TEXT", maxLength: 15, nullable: true),
                    Region = table.Column<string>(type: "TEXT", maxLength: 15, nullable: true),
                    PostalCode = table.Column<string>(type: "TEXT", maxLength: 10, nullable: true),
                    Country = table.Column<string>(type: "TEXT", maxLength: 15, nullable: true),
                    Phone = table.Column<string>(type: "TEXT", maxLength: 24, nullable: true),
                    Fax = table.Column<string>(type: "TEXT", maxLength: 24, nullable: true),
                    HomePage = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Suppliers", x => x.SupplierID);
                });

            migrationBuilder.CreateTable(
                name: "Warehouses",
                columns: table => new
                {
                    WarehouseID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Description = table.Column<string>(type: "TEXT", maxLength: 45, nullable: false),
                    Adress = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Warehouses", x => x.WarehouseID);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ProductName = table.Column<string>(type: "TEXT", maxLength: 40, nullable: false),
                    SupplierID = table.Column<int>(type: "INTEGER", nullable: true),
                    CategoryID = table.Column<int>(type: "INTEGER", nullable: true),
                    QuantityPerUnit = table.Column<string>(type: "TEXT", maxLength: 20, nullable: true),
                    UnitPrice = table.Column<double>(type: "REAL", nullable: true),
                    PhotoPath = table.Column<string>(type: "TEXT", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductID);
                    table.ForeignKey(
                        name: "FK_Products_Categories_CategoryID",
                        column: x => x.CategoryID,
                        principalTable: "Categories",
                        principalColumn: "CategoryID");
                    table.ForeignKey(
                        name: "FK_Products_Suppliers_SupplierID",
                        column: x => x.SupplierID,
                        principalTable: "Suppliers",
                        principalColumn: "SupplierID");
                });

            migrationBuilder.CreateTable(
                name: "Movements",
                columns: table => new
                {
                    MovementID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    SuppliersSupplierID = table.Column<int>(type: "INTEGER", nullable: true),
                    OriginWarehouseWarehouseID = table.Column<int>(type: "INTEGER", nullable: false),
                    TargetWarehouseWarehouseID = table.Column<int>(type: "INTEGER", nullable: true),
                    TipoMovimiento = table.Column<string>(type: "TEXT", nullable: false),
                    Notes = table.Column<string>(type: "TEXT", maxLength: 200, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movements", x => x.MovementID);
                    table.ForeignKey(
                        name: "FK_Movements_Suppliers_SuppliersSupplierID",
                        column: x => x.SuppliersSupplierID,
                        principalTable: "Suppliers",
                        principalColumn: "SupplierID");
                    table.ForeignKey(
                        name: "FK_Movements_Warehouses_OriginWarehouseWarehouseID",
                        column: x => x.OriginWarehouseWarehouseID,
                        principalTable: "Warehouses",
                        principalColumn: "WarehouseID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Movements_Warehouses_TargetWarehouseWarehouseID",
                        column: x => x.TargetWarehouseWarehouseID,
                        principalTable: "Warehouses",
                        principalColumn: "WarehouseID");
                });

            migrationBuilder.CreateTable(
                name: "WarehouseProducts",
                columns: table => new
                {
                    Warehouses = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ProductsProductID = table.Column<int>(type: "INTEGER", nullable: false),
                    UnitsInStock = table.Column<short>(type: "INTEGER", nullable: false),
                    UnitsOnOrder = table.Column<short>(type: "INTEGER", nullable: false),
                    ReorderLevel = table.Column<short>(type: "INTEGER", nullable: false),
                    Discontinued = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WarehouseProducts", x => x.Warehouses);
                    table.ForeignKey(
                        name: "FK_WarehouseProducts_Products_ProductsProductID",
                        column: x => x.ProductsProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MovementDetails",
                columns: table => new
                {
                    MovementsMovementID = table.Column<int>(type: "INTEGER", nullable: true),
                    ProductsProductID = table.Column<int>(type: "INTEGER", nullable: true),
                    Quantity = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_MovementDetails_Movements_MovementsMovementID",
                        column: x => x.MovementsMovementID,
                        principalTable: "Movements",
                        principalColumn: "MovementID");
                    table.ForeignKey(
                        name: "FK_MovementDetails_Products_ProductsProductID",
                        column: x => x.ProductsProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_MovementDetails_MovementsMovementID",
                table: "MovementDetails",
                column: "MovementsMovementID");

            migrationBuilder.CreateIndex(
                name: "IX_MovementDetails_ProductsProductID",
                table: "MovementDetails",
                column: "ProductsProductID");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_OriginWarehouseWarehouseID",
                table: "Movements",
                column: "OriginWarehouseWarehouseID");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_SuppliersSupplierID",
                table: "Movements",
                column: "SuppliersSupplierID");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_TargetWarehouseWarehouseID",
                table: "Movements",
                column: "TargetWarehouseWarehouseID");

            migrationBuilder.CreateIndex(
                name: "IX_Products_CategoryID",
                table: "Products",
                column: "CategoryID");

            migrationBuilder.CreateIndex(
                name: "IX_Products_SupplierID",
                table: "Products",
                column: "SupplierID");

            migrationBuilder.CreateIndex(
                name: "IX_WarehouseProducts_ProductsProductID",
                table: "WarehouseProducts",
                column: "ProductsProductID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MovementDetails");

            migrationBuilder.DropTable(
                name: "WarehouseProducts");

            migrationBuilder.DropTable(
                name: "Movements");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Warehouses");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Suppliers");
        }
    }
}
