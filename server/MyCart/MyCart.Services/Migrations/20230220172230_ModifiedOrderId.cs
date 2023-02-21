using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyCart.Services.Migrations
{
    public partial class ModifiedOrderId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orderproducts_Orders_OrderId",
                table: "Orderproducts");

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "Orderproducts",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Orderproducts_Orders_OrderId",
                table: "Orderproducts",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orderproducts_Orders_OrderId",
                table: "Orderproducts");

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "Orderproducts",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Orderproducts_Orders_OrderId",
                table: "Orderproducts",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id");
        }
    }
}
