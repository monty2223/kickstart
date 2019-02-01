pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCompaigns;
    
    function createCampaign(uint minimun) public {
        address newCampaign = new Campaign(minimun, msg.sender);
        deployedCompaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCompaigns;
    }
}

contract Campaign {
    
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address =>bool) approvals;
    }
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimunContribution;
    //address[] public approvers;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    function Campaign(uint minimun, address creator) public {
        manager = creator;
        minimunContribution = minimun;
    }
    function contribute() public payable {
        require(msg.value > minimunContribution);
        approversCount++;
        //approvers.push(msg.sender);
        approvers[msg.sender] =  true;
    }
    function createRequest(string description,uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value : value,
            recipient : recipient,
            complete: false,
            approvalCount:0
        });
        //Request newRequest = Request(description, value, recipient, false);
        requests.push(newRequest);
    }
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
         
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }
    function getSummary() public view returns (
        uint, uint, uint ,uint,address
    ) {
        return (
            minimunContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }
    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
    
}