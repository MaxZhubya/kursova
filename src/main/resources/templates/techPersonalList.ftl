<#import "/spring.ftl" as spring>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TechnicalPersonal</title>
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
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Deleting</th>
            <th>Editing</th>
        </tr>
        <#list technicalPersonalList as TechnicalPersonal>
            <tr>
                <td>${TechnicalPersonal.idTechPersonal}</td>
                <td>${TechnicalPersonal.personalName}</td>
                <td>${TechnicalPersonal.personalType}</td>
                <td>${TechnicalPersonal.description}</td>
                <td><a href="delete/${TechnicalPersonal.idTechPersonal}"><button>Delete</button></a></td>
                <td><button>Edit</button></td>
            </tr>
        </#list>
    </table>
</div>

</body>
</html>