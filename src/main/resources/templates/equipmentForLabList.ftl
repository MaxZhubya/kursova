<#import "/spring.ftl" as spring>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>EquipmentForLaboratory</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet"
          type="text/css" href="<@spring.url '/css/style.css'/>"/>
</head>
<body>
    <h3>EquipmentForLaboratory list</h3>
    <div>
        <table class="table table-sm table-dark" border="3", bgcolor="f0f8ff">
            <tr>
                <th>ID</th>
                <th>Laboratory</th>
                <th>Equipment type</th>
                <th>Description</th>
                <th>Deleting</th>
                <th>Editing</th>
            </tr>
            <#list equipmentForLabList as EquipmentForLaboratory>
                <tr>
                    <td>${EquipmentForLaboratory.idEquipmentForLab}</td>
                    <td>
                        <#if EquipmentForLaboratory.laboratory??>${EquipmentForLaboratory.laboratory.idLaboratory}</#if>
                    </td>
                    <td>${EquipmentForLaboratory.equipmentType}</td>
                    <td>${EquipmentForLaboratory.definition}</td>
                    <td><a href="delete/${EquipmentForLaboratory.idEquipmentForLab}"><button>Delete</button></a></td>
                    <td><button>Edit</button></td>
                </tr>
            </#list>
        </table>
    </div>
</body>
</html>