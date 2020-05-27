<#import "/spring.ftl" as spring>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Area</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet"
          type="text/css" href="<@spring.url '/css/style.css'/>"/>
</head>

<body>
    <h3>Area list</h3>
    <div>
<#--        <a href="save/${Area.idArea}"><button>Save</button></a>-->

        <table class="table table-sm table-dark" border="3", bgcolor="f0f8ff">
            <tr>
                <th>ID</th>
                <th>Team</th>
                <th>Brigades</th>
                <th>Workshop</th>
                <th>Products</th>
                <th>Definition</th>
                <th>Deleting</th>
                <th>Editing</th>
            </tr>
            <#list areaList as Area>
                <tr>
                    <td>${Area.idArea}</td>
                    <td>
                        <#if Area.teamOfAreaBoss??>
                            ${Area.teamOfAreaBoss.idTeam}
                        </#if>
                    </td>
                    <td>
                        <#if Area.brigadeList??>
                            <tr>
                                <#list Area.brigadeList as Brigade>
                                    <td>${Brigade.idBrigade}</td>
                                </#list>
                            </tr>
                        </#if>
                    </td>
                    <td>
                        <#if Area.workshop??>
                            ${Area.workshop.idWorkshop}
                        </#if>
                    </td>
                    <td>
                        <#if Area.productList??>
                            <tr>
                                <#list Area.productList as Product>
                                    <td>${Product.idProduct}</td>
                                </#list>
                            </tr>
                        </#if>
                    </td>
                    <td>${Area.definition}</td>
                    <td><a href="delete/${Area.idArea}"><button>Delete</button></a></td>
                    <td><a href="edit/${Area.idArea}"><button>Edit</button></a></td>
                </tr>
            </#list>
        </table>
    </div>
</body>
</html>
