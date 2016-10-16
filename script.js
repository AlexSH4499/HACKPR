var items = ['TBONESTEAK', 'GRNDBEEF', 'SAUSAGE', 'FRYCHICK', 'TUNA', 'HGALMILK', 'DOZENEGGS', 'MARGARINE', 'PARMESAN', 'POTATOES', 'BANANAS', 'LETTUCE', 'BREAD', 'ORANGJUICE', 'COFFEE', 'SUGAR', 'CEREAL', 'SWEETPEAS', 'PEACHES', 'KLNX', 'CAS-CADE', 'CANOLAOIL', 'FROZNMEAL', 'FROZNCORN', 'POTATOCHIPS', 'COKE', 'APTRENT', 'HOMEPRICE', 'MORTRATE (%)', 'HOMEP+I', 'ALL-ELECT', 'PARTELECT', 'OTHERENERGY', 'TOTALENERGY', 'PHONE', 'TIREBAL', 'GASOLINE', 'OPTOMETRIST', 'DOCTOR', 'DENTIST', 'IBUPROFEN', 'LIPITOR', 'HMBGRSAND', 'PIZZA', '2-PCCHICK', 'HAIRCUT', 'BEAUTSALON', 'TOOTHPASTE', 'SHAMPOO', 'DRYCLEAN', "MEN'SSHIRT", "BOY'SJEANS", "WOMEN'SSLACKS", 'WASHRREPR', 'NEWSPAPER', 'MOVIE', 'BOWLING', 'TENNSBALLS', 'VETSERVICES', 'BEER', 'WINE']; 

var cities = ['Anniston-Calhoun County AL', 'Auburn-Opelika AL', 'Birmingham AL', 'Decatur-Hartselle AL', 'Dothan AL', 'Florence AL', 'Huntsville AL', 'Mobile AL', 'Montgomery AL', 'Anchorage AK', 'Fairbanks AK', 'Juneau AK', 'Kodiak AK', 'Flagstaff AZ', 'Bullhead City AZ', 'Lake Havasu City AZ', 'Phoenix AZ', 'Prescott-Prescott Valley AZ', 'Sierra Vista AZ', 'Tucson AZ', 'Yuma AZ', 'Fayetteville AR', 'Hot Springs AR', 'Jonesboro AR', 'Conway AR', 'Little Rock-North Little Rock AR', 'Orange County CA', 'Bakersfield CA', 'Fresno CA', 'Los Angeles-Long Beach CA', 'Modesto CA', 'Oakland CA', 'Sacramento CA', 'San Diego CA', 'San Francisco CA', 'Stockton CA', 'Tracy CA', 'Truckee-Nevada County CA', 'Colorado Springs CO', 'Denver CO', 'Grand Junction CO', 'Pueblo CO', 'Glenwood Springs CO', 'Gunnison CO', 'Stamford CT', 'Hartford CT', 'New Haven CT', 'Dover DE', 'Wilmington DE', 'Washington-Arlington-Alexandria DC-VA', 'Cape Coral-Fort Myers FL', 'Daytona Beach FL', 'Palm Coast-Flagler County FL', 'Fort Lauderdale FL', 'Gainesville FL', 'Jacksonville FL', 'Miami-Dade County FL', 'Sarasota FL', 'Orlando FL', 'Pensacola FL', 'Punta Gorda-Charlotte Co FL', 'Vero Beach-Indian River FL', 'Tampa FL', 'Albany GA', 'Atlanta GA', 'Fayetteville-Fayette County GA', 'Marietta GA', 'Augusta-Aiken GA-SC', 'Columbus GA', 'Dalton GA', 'Dublin-Laurens County GA', 'Savannah GA', 'Statesboro-Bulloch County GA', 'Valdosta GA', 'Hilo HI', 'Honolulu HI', 'Boise ID', 'Idaho Falls ID', 'Twin Falls ID', 'Champaign-Urbana IL', 'Chicago IL', 'Joliet-Will County IL', 'Danville IL', 'Decatur IL', 'Kankakee IL', 'Peoria IL', 'Quincy IL', 'Rockford IL', 'Springfield IL', 'Bloomington IN', 'Evansville IN', 'Fort Wayne-Allen County IN', 'Indianapolis IN', 'Indianapolis-Morgan County IN', 'Lafayette IN', 'Richmond IN', 'South Bend IN', 'Terre Haute IN', 'Ames IA', 'Burlington IA', 'Cedar Rapids IA', 'Davenport-Moline-Rock Is IA-IL', 'Des Moines IA', 'Dubuque IA', 'Mason City IA', 'Waterloo-Cedar Falls IA', 'Dodge City KS', 'Hutchinson KS', 'Manhattan KS', 'Salina KS', 'Topeka KS', 'Wichita KS', 'Bowling Green KY', 'Covington KY', 'Lexington KY', 'Louisville KY', 'Paducah KY', 'Alexandria LA', 'Baton Rouge LA', 'Hammond LA', 'Houma-Terrebonne Parish LA', 'Thibodaux-Lafourche Parish LA', 'Lafayette LA', 'Lake Charles LA', 'Monroe LA', 'New Orleans LA', 'Slidell-St. Tammany Parish LA', 'Shreveport-Bossier City LA', 'Portland ME', 'Baltimore MD', 'Bethesda-Gaithersburg-Frederick MD', 'Boston MA', 'Framingham-Natick MA', 'Pittsfield MA', 'Fitchburg-Leominster MA', 'Detroit MI', 'Grand Rapids MI', 'Kalamazoo MI', 'Benton Harbor MI', 'Mankato MN', 'Minneapolis MN', 'St. Paul MN', 'St. Cloud MN', 'Hattiesburg MS', 'Jackson MS', 'Tupelo MS', 'Columbia MO', 'Jefferson City MO', 'Joplin MO', 'Kansas City MO-KS', 'St. Louis MO-IL', 'Springfield MO', 'Bozeman MT', 'Hastings NE', 'Lincoln NE', 'Omaha NE', 'Las Vegas NV', 'Reno-Sparks NV', 'Manchester NH', 'Newark-Elizabeth NJ', 'Bergen-Passaic NJ', 'Middlesex-Monmouth NJ', 'Albuquerque NM', 'Rio Rancho NM', 'Albany NY', 'Buffalo NY', 'Ithaca NY', 'New York (Brooklyn) NY', 'New York (Manhattan) NY', 'Rochester NY', 'Asheville NC', 'Burlington NC', 'Charlotte NC', 'Chapel Hill NC', 'Durham NC', 'Dare County NC', 'Raleigh NC', 'Wilmington NC', 'Thomasville-Lexington NC', 'Winston-Salem NC', 'Bismarck-Mandan ND', 'Fargo-Moorhead ND-MN', 'Minot ND', 'Akron OH', 'Ashland OH', 'Cincinnati OH', 'Cleveland OH', 'Columbus OH', 'Dayton OH', 'Findlay OH', 'Lima OH', 'Wooster OH', 'Youngstown-Warren OH', 'Ardmore OK', 'Enid OK', 'Lawton OK', 'Muskogee OK', 'Edmond OK', 'Norman OK', 'Oklahoma City OK', 'Ponca City OK', 'Stillwater OK', 'Tulsa OK', 'Pryor Creek OK', 'Portland OR', 'Erie PA', 'Harrisburg PA', 'Johnstown PA', 'Philadelphia PA', 'Pittsburgh PA', 'Scranton PA', 'Wilkes-Barre PA', 'Williamsport-Lycoming County PA', 'York County PA', 'Providence RI', 'Charleston-N Charleston SC', 'Camden SC', 'Columbia SC', 'Anderson SC', 'Greenville SC', 'Beaufort SC', 'Hilton Head Island SC', 'Myrtle Beach SC', 'Sumter SC', 'Pierre SD', 'Sioux Falls SD', 'Chattanooga TN', 'Cleveland TN', 'Cookeville TN', 'Jackson-Madison County TN', 'Knoxville TN', 'Memphis TN', 'Morristown TN', 'Columbia-Maury County TN', 'Nashville-Murfreesboro TN', 'Abilene TX', 'Amarillo TX', 'Athens-Henderson County TX', 'Austin TX', 'Round Rock TX', 'San Marcos TX', 'Beaumont TX', 'Brownsville TX', 'Harlingen TX', 'Corpus Christi TX', 'Allen TX', 'Dallas TX', 'Denton TX', 'Plano TX', 'El Paso TX', 'Fort Worth TX', 'Brazoria County TX', 'Conroe TX', 'Houston TX', 'Temple TX', 'Longview TX', 'Lubbock TX', 'McAllen TX', 'Midland TX', 'Nacogdoches TX', 'Odessa TX', 'San Angelo TX', 'San Antonio TX', 'Seguin TX', 'Sherman-Denison TX', 'Texarkana TX-AR', 'Tyler TX', 'Waco TX', 'Wichita Falls TX', 'Cedar City UT', 'St. George UT', 'Salt Lake City UT', 'Burlington-Chittenden County VT', 'Blacksburg VA', 'Charlottesville VA', 'Danville City VA', 'Harrisonburg VA', 'Lynchburg VA', 'Martinsville-Henry County VA', 'Richmond VA', 'Roanoke VA', 'Staunton-Augusta County VA', 'Hampton Roads-SE Virginia VA', 'Winchester VA-WV', 'Lexington-Buena Vista-Rockbridge VA', 'Bellingham WA', 'Kennewick-Richland-Pasco WA', 'Moses Lake WA', 'Mount Vernon-Skagit County WA', 'Olympia WA', 'Vancouver WA', 'Everett WA', 'Seattle WA', 'Spokane WA', 'Tacoma WA', 'Yakima WA', 'Morgantown WV', 'Eau Claire WI', 'Fond du Lac WI', 'Green Bay WI', 'Janesville WI', 'Madison WI', 'Milwaukee-Waukesha WI', 'Marshfield WI', 'Laramie WY', 'San Juan PR']

var text = "";
var wages = ""; 
var city_a,city_b, wage; 

for(var i = 0; i < items.length; i++){
    document.write('<input type="checkbox" id="item' +  i + '" value= ' + items[i]+' > ' + items[i] + '<br>')
}

function submit_checks() { 
    for(var i = 0; i < items.length; i++){
        if($("#item" + i).is(':checked')){
            items[i] = "True"; 
        }
        else{
            items[i] = "False";
        }
    }
    $("form").remove();
    $("button").remove();
    for(var i = 0; i < cities.length; i++){
        text = text + '<option value="' + cities[i] + '>' + cities[i] + '</option>' ;
    }   
    for(var i = 0; i <= 200000; i += 5000){
        wages = wages + '<option value="wage">' + i + '</option>' ;
    }
    $("body").append( 'City A<select id=1>' + text + '</select>' + '<br>'); 
    $("body").append( 'City B<select id=2>' + text + '</select>' + '<br>');
    $("body").append( 'Salary<select id=3>' + wages + '</select>' + '<br>');
    $("body").append( '<button onclick="submit_values()">Submit</button>');
}   

function submit_values() { 
    city_a = $("#1 option:selected").text()
    city_b = $("#2 option:selected").text()
    wage = $("#3 option:selected").text()   
    }   





