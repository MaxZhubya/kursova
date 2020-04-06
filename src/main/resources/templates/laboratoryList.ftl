<#import "/spring.ftl" as spring>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laboratory</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet"
          type="text/css" href="<@spring.url '/css/style.css'/>"/>
</head>
<body>
    <h3>Laboratory list</h3>
    <div>
        <table class="table table-sm table-dark" border="3", bgcolor="f0f8ff">
            <tr>
                <th>ID</th>
                <th>Equipment</th>
<#--                <th>Products</th>-->
                <th>Workshops</th>
                <th>Definition</th>
                <th>Deleting</th>
                <th>Editing</th>
            </tr>
            <#list laboratoryList as Laboratory>
                <tr>
                    <td>${Laboratory.idLaboratory}</td>
                    <td>
                    <#if Laboratory.equipmentForLaboratoryList??>
                        <tr>
                            <#list Laboratory.equipmentForLaboratoryList as EquipmentForLaboratory>
                                <td>${EquipmentForLaboratory.idEquipmentForLab}</td>
                            </#list>
                        </tr>
                    </#if>
                    </td>
                    <td>
                        <#if Laboratory.workshopList??>
                            <tr>
                                <#list Laboratory.workshopList as Workshop>
                                    <td>${Workshop.idWorkshop}</td>
                                </#list>
                            </tr>
                        </#if>
                    </td>
                    <td>${Laboratory.definition}</td>
                    <td><a href="delete/${Laboratory.idLaboratory}"><button>Delete</button></a></td>
                    <td><button>Edit</button></td>
                </tr>
            </#list>
        </table>
    </div>
</body>
</html>