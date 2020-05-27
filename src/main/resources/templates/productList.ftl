<#import "/spring.ftl" as spring>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Product</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet"
          type="text/css" href="<@spring.url '/css/style.css'/>"/>
</head>
<body>
    <h3>TechPersonal list</h3>
    <div>
        <table class="table table-sm table-dark" border="3", bgcolor="f0f8ff">
            <tr>
                <th>ID</th>
                <th>Area</th>
                <th>Laboratory</th>
                <th>Category</th>
                <th>Type</th>
                <th>Deleting</th>
                <th>Editing</th>
            </tr>
            <#list productList as Product>
                <tr>
                    <td>${Product.idProduct}</td>
                    <td>
                        <#if Product.currentArea??>${Product.currentArea.idArea}</#if>
                    </td>
                    <td>
                        <#if Product.currentLaboratory??>${Product.currentLaboratory.idLaboratory}</#if>
                    </td>
                    <td>${Product.category}</td>
                    <td>${Product.type}</td>
                    <td><a href="delete/${Product.idProduct}"><button>Delete</button></a></td>
                    <td><a href="edit/${Product.idProduct}"><button>Edit</button></a></td>
                </tr>
            </#list>
        </table>
    </div>
</body>
</html>
