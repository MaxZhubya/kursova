<#import "/spring.ftl" as spring>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Workshop</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet"
          type="text/css" href="<@spring.url '/css/style.css'/>"/>
</head>
<body>
    <h3>Workshop list</h3>
    <div>
        <table class="table table-sm table-dark" border="3", bgcolor="f0f8ff">
            <tr>
                <th>ID</th>
                <th>Areas</th>
                <th>Laboratories</th>
<#--                <th>Product</th>-->
                <th>Definition</th>
                <th>Deleting</th>
                <th>Editing</th>
            </tr>
            <#list workshopList as Workshop>
                <tr>
                    <td>${Workshop.idWorkshop}</td>
                    <td>
                        <#if Workshop.areaList??>
                            <tr>
                                <#list Workshop.areaList as Area>
                                    <td>${Area.idArea}</td>
                                </#list>
                            </tr>
                        </#if>
                    </td>
                    <td>
                        <#if Workshop.laboratoryList??>
                            <tr>
                                <#list Workshop.laboratoryList as Laboratory>
                                    <td>${Laboratory.idLaboratory}</td>
                                </#list>
                            </tr>
                        </#if>
                    </td>
                    <td>${Workshop.definition}</td>
                    <td><a href="delete/${Workshop.idWorkshop}"><button>Delete</button></a></td>
                    <td><button>Edit</button></td>
                </tr>
            </#list>
        </table>
    </div>
</body>
</html>