<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Course Javascript</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
<div class="container mt-5">


    <div class="row mt-5">
        <div class="col-md-12 ">
            <form method="post" action="" id="formController">

                <div class="form-group">
                    <label for="username" class="text-info font-weight-bolder">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Enter your username">
                </div>

                <div class="form-group">
                    <label for="password" class="col-sm-2 col-form-label text-info font-weight-bolder">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>

                <div class="form-group">
                    <label for="confirmPassword" class="col-sm-2 col-form-label text-info font-weight-bolder">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmPassword" placeholder="confirm Password">
                </div>


                <div class="form-group">
                    <label for="email" class="text-info font-weight-bolder">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com">
                </div>

                <div class="form-group">
                    <label for="number" class="text-info font-weight-bolder">Phone number</label>
                    <input type="number" class="form-control" id="number" placeholder="Enter your number phone">
                </div>

                <div class="form-group">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="php">
                        <label class="form-check-label" for="inlineCheckbox1">PHP</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="mysql">
                        <label class="form-check-label" for="inlineCheckbox2">MYSQL</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="JavaScript">
                        <label class="form-check-label" for="inlineCheckbox3">JAVASCRIPT</label>
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="homme">
                        <label class="form-check-label" for="inlineRadio1">Homme</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="femme">
                        <label class="form-check-label" for="inlineRadio2">Femme</label>
                    </div>
                </div>


                <div class="form-group">
                    <label for="select" class="text-info font-weight-bolder">Select your country</label>
                    <select class="form-control" id="select">
                        <option value="france">France</option>
                        <option value="italie">Italie</option>
                        <option value="canada">Canada</option>
                        <option value="russie">Russie</option>
                        <option value="usa">USA</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="multiple" class="text-info font-weight-bolder">Multiple select</label>
                    <select multiple class="form-control" id="multiple">
                        <option value="pommes">Pommes</option>
                        <option value="bananes">Bananes</option>
                        <option value="citrons">Citrons</option>
                        <option value="ananas">Ananas</option>
                        <option value="coco">Coco</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="textarea" class="text-info font-weight-bolder">Textarea</label>
                    <textarea class="form-control" id="textarea" rows="3"></textarea>
                </div>
                <button type="submit"class="btn btn-secondary">Submit</button>
            </form>
        </div>
    </div>
</div>

<script src="Doms.js"></script>
<script src="Validator.js"></script>
<script src="forms.js"></script>
</body>
</html>
