using Microsoft.EntityFrameworkCore.Migrations;

namespace CompanyDb.Migrations
{
    public partial class SeeData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Company",
                columns: new[] { "CompanyId", "CompanyAddress", "CompanyName" },
                values: new object[] { 1, "abc", "vs" });

            migrationBuilder.InsertData(
                table: "Company",
                columns: new[] { "CompanyId", "CompanyAddress", "CompanyName" },
                values: new object[] { 2, "abc sl", "vs_cmb" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Company",
                keyColumn: "CompanyId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Company",
                keyColumn: "CompanyId",
                keyValue: 2);
        }
    }
}
