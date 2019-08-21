<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Course Javascript</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
<div class="text-center mt-5">
    <div class="row mt-5">
        <div class="col-md-4">
            <p id="content">Le formulaire</p>
            <form method="post" action="" id="formulary">

                <input  type="text" name="first_name" id="first_name" placeholder="First name"/><br/><br/>
                <input  type="text" name="last_name" class="last_name" placeholder="Last name"/><br/><br/>
                <button class="btn btn-success" onclick="getForms()">Tester</button>
            </form>
        </div>
        <div class="col-md-4">

            <div class="mt-5">
                <div class="content">Content 1</div>
                <div class="content">Content 2</div>
                <div class="content">Content 3</div>
                <div class="content">Content 4</div>
                <div>
                    <p><a href="">Le lien vers document.querySelector()</a> </p>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="mt-5" id="innerHTML"></div>
            <div id="textContent"></div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-md-3">
            <div class="alert alert-success">
                <strong>Je suis heuruex</strong>
            </div>
            <div class="alert alert-info">
                <strong>Je suis heuruex</strong>
            </div>
            <button class="btn btn-outline-info" onclick="classLists()">classList</button>
        </div>

        <div class="col-md-3" id="col">
            <button class="btn btn-lg btn-success" id="btn-success"></button>
            <button class="btn btn-lg btn-secondary" id="btn-secondary"></button>
        </div>

        <div class="col-md-3">
            <img src="java.jpeg" alt="Java" class="rounded img-thumbnail" onclick="img()"/>
        </div>
        <div class="col-md-3">
            <input type="password" name="password" id="password" /><span class="badge badge-danger"  style="cursor: pointer" onclick="ShowHidePassword()">Show</span><span class="badge badge-info d-none"  style="cursor: pointer" onclick="ShowHidePassword()">Hide</span>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-md-4" id="add">
            <input type="text" name="user" id="user" placeholder="Enter your username" onkeyup="addInput(this.value)" />
            <span class="text-danger"></span>
        </div>

        <div class="col-md-4" id="text_add">

        </div>

        <div class="col-md-4">
            <input type="text" id="events" placeholder="Enter your name"/><br/><br/>
            <select name="choice" id="choice">
                <option value="Paris">Paris</option>
                <option value="Berlin">Berlin</option>
                <option value="Rome">Rome</option>
            </select>
        </div>

    </div>









</div>


<script src="Doms.js"></script>
<script  src="dom.js"></script>
<script src="events.js"></script>
</body>
</html>



<?php
